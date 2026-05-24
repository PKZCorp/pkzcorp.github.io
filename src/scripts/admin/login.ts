import { supabase } from '../../lib/admin/supabaseBrowser';

const form = document.querySelector<HTMLFormElement>('#admin-login-form');
const feedback = document.querySelector<HTMLElement>('#admin-login-feedback');

function setFeedback(message: string, isError = false) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.dataset.state = isError ? 'error' : 'ok';
}

async function redirectIfLoggedIn() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
        setFeedback('Could not verify current session.', true);
        return;
    }

    if (data.session) {
        window.location.href = '/admin/';
    }
}

if (form) {
    redirectIfLoggedIn();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const email = String(formData.get('email') || '').trim();

        if (!email) {
            setFeedback('Enter your email to receive a login link.', true);
            return;
        }

        setFeedback('Sending login link...');

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${window.location.origin}/admin/`,
            },
        });

        if (error) {
            setFeedback(error.message, true);
            return;
        }

        setFeedback('Magic link sent. Check your inbox.');
    });
}
