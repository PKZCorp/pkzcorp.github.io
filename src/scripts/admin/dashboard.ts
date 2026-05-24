import { supabase } from '../../lib/admin/supabaseBrowser';

type DraftPayload = {
    slug: string;
    name: string;
    tagline: string;
    bio: string;
    skills: string[];
};

const userEmail = document.querySelector<HTMLElement>('#admin-user-email');
const signOutButton = document.querySelector<HTMLButtonElement>('#admin-signout');
const saveButton = document.querySelector<HTMLButtonElement>('#admin-save-draft');
const status = document.querySelector<HTMLElement>('#admin-status');

const slugInput = document.querySelector<HTMLInputElement>('#draft-slug');
const nameInput = document.querySelector<HTMLInputElement>('#draft-name');
const taglineInput = document.querySelector<HTMLInputElement>('#draft-tagline');
const bioInput = document.querySelector<HTMLTextAreaElement>('#draft-bio');
const skillsInput = document.querySelector<HTMLInputElement>('#draft-skills');

function setStatus(message: string, isError = false) {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = isError ? 'error' : 'ok';
}

function getDraftFromForm(): DraftPayload {
    const skills = String(skillsInput?.value || '')
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean);

    return {
        slug: String(slugInput?.value || '').trim(),
        name: String(nameInput?.value || '').trim(),
        tagline: String(taglineInput?.value || '').trim(),
        bio: String(bioInput?.value || '').trim(),
        skills,
    };
}

function fillForm(payload: Partial<DraftPayload>) {
    if (slugInput && payload.slug) slugInput.value = payload.slug;
    if (nameInput && payload.name) nameInput.value = payload.name;
    if (taglineInput && payload.tagline) taglineInput.value = payload.tagline;
    if (bioInput && payload.bio) bioInput.value = payload.bio;
    if (skillsInput && payload.skills?.length) skillsInput.value = payload.skills.join(', ');
}

async function loadExistingDraft(userId: string) {
    const { data, error } = await supabase
        .from('member_drafts')
        .select('draft_json, updated_at')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle();

    if (error) {
        setStatus('Logged in, but no drafts table was found yet. Run the SQL setup first.', true);
        return;
    }

    if (data?.draft_json) {
        fillForm(data.draft_json as Partial<DraftPayload>);
        setStatus(`Draft loaded (last update: ${new Date(data.updated_at).toLocaleString()}).`);
    }
}

async function saveDraft() {
    const draft = getDraftFromForm();

    if (!draft.slug || !draft.name || !draft.tagline || !draft.bio) {
        setStatus('Slug, name, tagline, and bio are required.', true);
        return;
    }

    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;

    if (!token) {
        setStatus('Session expired. Log in again.', true);
        window.location.href = '/admin/login/';
        return;
    }

    setStatus('Saving draft...');

    const response = await fetch('/api/save-member-draft', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(draft),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
        const msg = typeof payload?.error === 'string' ? payload.error : 'Failed to save draft.';
        setStatus(msg, true);
        return;
    }

    setStatus('Draft saved successfully.');
}

async function initDashboard() {
    const { data, error } = await supabase.auth.getSession();

    if (error || !data.session) {
        window.location.href = '/admin/login/';
        return;
    }

    const email = data.session.user.email || 'unknown';
    if (userEmail) userEmail.textContent = email;

    await loadExistingDraft(data.session.user.id);
}

if (saveButton) {
    saveButton.addEventListener('click', async () => {
        await saveDraft();
    });
}

if (signOutButton) {
    signOutButton.addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.href = '/admin/login/';
    });
}

initDashboard();
