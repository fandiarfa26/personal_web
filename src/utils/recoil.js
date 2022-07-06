import { atom } from "recoil";

const currentLanguage = atom({
  key: 'current-language',
  default: 'id'
})

export {currentLanguage}