export const languages = {
  'en': 'English',
  'pt-br': 'Português'
};

export const defaultLang = 'pt-br';

export const ui = {
  'en': {
    'footer.copyright': '© 2026 PKZCorp. All rights reserved.',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.members': 'Members',
    'nav.projects': 'Projects',
    'nav.jams': 'Jams',
    'nav.contact': 'Contact'
  },
  'pt-br': {
    'footer.copyright': '© 2026 PKZCorp. Todos os direitos reservados.',
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.members': 'Membros',
    'nav.projects': 'Projetos',
    'nav.jams': 'Jams',
    'nav.contact': 'Contato'
  }
} as const;

// Navigation routes mapping label keys to their paths
export const navRoutes = {
  'nav.home': { pt_br: '', en: '' },
  'nav.about': { pt_br: 'sobre', en: 'about' },
  'nav.members': { pt_br: 'membros', en: 'members' },
  'nav.projects': { pt_br: 'projetos', en: 'projects' },
  'nav.jams': { pt_br: 'jams', en: 'jams' },
  'nav.contact': { pt_br: 'contato', en: 'contact' }
} as const;

// Navigation items in order
export const navItems = [
  'nav.home',
  'nav.about',
  'nav.members',
  'nav.projects',
  'nav.jams',
  'nav.contact'
] as const;
