import React from 'react'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../utils/recoil';
import { translate } from '../utils/translate'

const Footer = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <footer className="text-sm lg:text-base text-center py-10 font-['Inconsolata'] text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-900">
      <div>{ translate[language]['Di desain dan dibuat oleh'] } M. Fandi Arfabuma</div>
      <div>{ translate[language]['Inspirasi dari'] } <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer" className="underline hover:text-rose-500 dark:hover:text-rose-400">brittanychiang.com</a></div>
      <div>&copy; 2022</div>
    </footer>
  )
}

export default Footer