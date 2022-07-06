import React, { useState } from 'react'
import Logo from './Logo'
import ScrollIntoView from 'react-scroll-into-view'
import { FiX } from 'react-icons/fi'
import { menus } from '../utils/data'
import { useRecoilState } from 'recoil'
import { currentLanguage } from '../utils/recoil'
import { translate } from '../utils/translate'

const Header = () => {
  const [language, setLanguage] = useRecoilState(currentLanguage);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`header ${navOpen? 'bg-white' : 'bg-transparent'}`}>
      <div className="header__logo-wrapper">
        <Logo />
        <a href="#!" className='header__hamburger' onClick={() => setNavOpen(!navOpen)}>
          <FiX className={`icon ${navOpen? 'rotate-0' : 'rotate-45'}`} />
        </a>
      </div>
      <nav className={`header__nav ${navOpen? 'flex' : 'hidden'}`}>
        {
          menus.map((menu, i) => (
            <ScrollIntoView selector={menu.target} key={i}>
              <a href="#!" onClick={() => setNavOpen(false)}><span>{`0${i+1}.`}</span>{ translate[language][menu.label]}</a>
            </ScrollIntoView>
          ))
        }
        <select className="select-languages" onChange={(e) => setLanguage(e.target.value)}>
          <option value="id" selected={language === 'id'}>ID</option>
          <option value="en" selected={language === 'en'}>EN</option>
        </select>
      </nav>
    </header>
  )
}

export default Header