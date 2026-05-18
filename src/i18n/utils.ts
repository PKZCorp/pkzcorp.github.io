import { ui, defaultLang, navRoutes, navItems } from './ui';
import { getRelativeLocaleUrl } from 'astro:i18n';

type IconName = 'home' | 'info' | 'users' | 'project' | 'spark' | 'mail' | 'repo' | 'external';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getNavLinks(lang: keyof typeof ui) {
  const t = useTranslations(lang);

  return navItems.map(navKey => {
    const path = navRoutes[navKey][lang === 'pt-br' ? 'pt_br' : 'en'];
    return {
      key: navKey,
      label: t(navKey),
      href: getRelativeLocaleUrl(lang, path)
    };
  });
}

export function getIconForNavItem(key: string): IconName {
  const iconMap: Record<string, IconName> = {
    'nav.home': 'home',
    'nav.about': 'info',
    'nav.members': 'users',
    'nav.projects': 'project',
    'nav.jams': 'spark',
    'nav.contact': 'mail'
  };
  return iconMap[key] || 'home';
}
