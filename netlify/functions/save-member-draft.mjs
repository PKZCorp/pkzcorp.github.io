import { createClient } from '@supabase/supabase-js';

function json(statusCode, payload) {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };
}

function validateDraft(input) {
    if (!input || typeof input !== 'object') {
        return 'Invalid payload.';
    }

    const requiredFields = ['slug', 'name', 'tagline', 'bio'];

    for (const field of requiredFields) {
        const value = input[field];
        if (typeof value !== 'string' || value.trim().length === 0) {
            return `Field "${field}" is required.`;
        }
    }

    if (!Array.isArray(input.skills)) {
        return 'Field "skills" must be an array.';
    }

    if (input.skills.some((skill) => typeof skill !== 'string')) {
        return 'Every skill must be a string.';
    }

    return null;
}

export async function handler(event) {
    if (event.httpMethod !== 'POST') {
        return json(405, { error: 'Method not allowed.' });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const secretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !secretKey) {
        return json(500, { error: 'Missing SUPABASE_URL or SUPABASE_SECRET_KEY.' });
    }

    const authorization = event.headers.authorization || event.headers.Authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return json(401, { error: 'Missing bearer token.' });
    }

    const accessToken = authorization.slice('Bearer '.length);

    let payload;
    try {
        payload = JSON.parse(event.body || '{}');
    } catch {
        return json(400, { error: 'Invalid JSON body.' });
    }

    const validationError = validateDraft(payload);
    if (validationError) {
        return json(400, { error: validationError });
    }

    const supabase = createClient(supabaseUrl, secretKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    });

    const userResult = await supabase.auth.getUser(accessToken);

    if (userResult.error || !userResult.data.user) {
        return json(401, { error: 'Invalid session token.' });
    }

    const user = userResult.data.user;

    const row = {
        user_id: user.id,
        slug: payload.slug.trim(),
        draft_json: {
            slug: payload.slug.trim(),
            name: payload.name.trim(),
            tagline: payload.tagline.trim(),
            bio: payload.bio.trim(),
            skills: payload.skills.map((skill) => String(skill).trim()).filter(Boolean),
        },
        updated_at: new Date().toISOString(),
    };

    const saveResult = await supabase
        .from('member_drafts')
        .upsert(row, { onConflict: 'user_id,slug' })
        .select('id, updated_at')
        .single();

    if (saveResult.error) {
        return json(500, {
            error: `Failed to save draft: ${saveResult.error.message}`,
        });
    }

    return json(200, {
        ok: true,
        draft: saveResult.data,
    });
}
