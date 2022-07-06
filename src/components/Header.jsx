import React, { useState } from 'react'
import Logo from './Logo'
import ScrollIntoView from 'react-scroll-into-view'
import { FiX } from 'react-icons/fi'

const Header = () => {
  const menus = [
    {
      label: 'Tentang',
      target: '#about'
    },
    {
      label: 'Kemampuan',
      target: '#skill'
    },
    {
      label: 'Pengalaman',
      target: '#experience'
    },
    {
      label: 'Projek',
      target: '#project'
    },
    {
      label: 'Kontak',
      target: '#contact'
    },
  ];

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
              <a href="#!" onClick={() => setNavOpen(false)}><span>{`0${i+1}.`}</span>{menu.label}</a>
            </ScrollIntoView>
          ))
        }
      </nav>
    </header>
  )
}

export default Header