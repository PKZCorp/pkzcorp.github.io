// public/js/nav.js
// Mobile nav: toggles, Escape-to-close, and basic focus trap
const btn = document.getElementById('menu-button');
const nav = document.getElementById('main-nav');
const header = document.querySelector('.header');

const FOCUSABLE_SELECTORS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS)).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length);
}

let prevFocus = null;

function openNav() {
    prevFocus = document.activeElement;
    btn.setAttribute('aria-expanded', 'true');
    header.classList.add('nav-open');
    nav.setAttribute('aria-hidden', 'false');
    document.addEventListener('keydown', onDocumentKeydown);
    const focusables = getFocusableElements(nav);
    if (focusables.length) focusables[0].focus();
}

function closeNav() {
    btn.setAttribute('aria-expanded', 'false');
    header.classList.remove('nav-open');
    nav.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', onDocumentKeydown);
    if (prevFocus && typeof prevFocus.focus === 'function') prevFocus.focus();
    prevFocus = null;
}

function onDocumentKeydown(e) {
    if (!header.classList.contains('nav-open')) return;

    if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        closeNav();
        return;
    }

    if (e.key === 'Tab') {
        const focusables = getFocusableElements(nav);
        if (focusables.length === 0) {
            e.preventDefault();
            return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
}

if (btn && nav && header) {
    // ensure initial ARIA state
    if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
    if (!nav.hasAttribute('aria-hidden')) nav.setAttribute('aria-hidden', 'true');

    btn.addEventListener('click', () => {
        const isOpen = header.classList.contains('nav-open');
        if (isOpen) closeNav(); else openNav();
    });

    // close nav when a link inside is activated (useful for single-page navs)
    nav.addEventListener('click', (e) => {
        const target = e.target.closest && e.target.closest('a');
        if (target) closeNav();
    });
}
