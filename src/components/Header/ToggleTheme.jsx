import React from 'react'
import {HiOutlineLightBulb} from 'react-icons/hi'
import { useRecoilState } from 'recoil'
import { isThemeDark } from '../../utils/recoil'

const ToggleTheme = () => {
  const [dark, setDark] = useRecoilState(isThemeDark);
  return (
    <a href="#!" onClick={() => setDark(!dark)} className="flex items-center justify-center w-12 h-12 m-4 bg-yellow-200 rounded-full lg:fixed lg:right-0 lg:m-8 top-24 dark:bg-transparent hover:bg-yellow-100 text-slate-900 dark:text-slate-100 dark:hover:bg-slate-700">
      <HiOutlineLightBulb className="icon"/>
    </a>
  )
}

export default ToggleTheme