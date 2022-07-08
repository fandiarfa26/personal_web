import { atom } from "recoil";

const isThemeDark = atom({
  key: 'is-theme-dark',
  default: window.matchMedia("(prefers-color-scheme: dark)").matches,
})

const isNavOpen = atom({
  key: 'is-nav-open',
  default: false
});

const currentLanguage = atom({
  key: 'current-language',
  default: 'id'
});

const expMenuActive = atom({
  key: 'experience-menu-active',
  default: 0
});

export {isThemeDark, isNavOpen, currentLanguage, expMenuActive}