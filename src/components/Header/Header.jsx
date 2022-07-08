import React from 'react'
import { useRecoilValue } from 'recoil'
import HeaderWrapper from './HeaderWrapper'
import HeaderNav from './HeaderNav'
import { isNavOpen } from '../../utils/recoil'
import ToggleTheme from './ToggleTheme'

const Header = () => {
  const open = useRecoilValue(isNavOpen);

  return (
    <header className={`${open? 'bg-opacity-100' : 'bg-opacity-50 dark:bg-opacity-50'} bg-white dark:bg-slate-800  lg:py-5 px-5 lg:px-10 flex flex-col lg:flex-row justify-between items-center backdrop-blur dark:backdrop-blur fixed w-full z-50`}>
      <HeaderWrapper/>
      <HeaderNav/>
      
    </header>
  )
}

export default Header