import React from 'react'
import HeaderLink from './HeaderLink';
import SelectLanguage from './SelectLanguage';
import { useRecoilValue } from 'recoil'
import { isNavOpen } from '../../utils/recoil'
import { menus } from '../../utils/data'

const HeaderNav = () => {
  const open = useRecoilValue(isNavOpen);

  return (
    <nav className={`font-['Inconsolata'] ${open? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-8 text-2xl lg:text-base h-screen lg:h-auto pt-10 lg:pt-0 `}>
      {
        menus.map((menu, i) => <HeaderLink key={i} menu={menu} index={i} />)
      }
      <SelectLanguage />
    </nav>
  )
}

export default HeaderNav