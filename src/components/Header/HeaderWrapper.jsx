import React from 'react'
import Logo from './Logo'
import Hamburger from './Hamburger'
import ToggleTheme from './ToggleTheme'

const HeaderWrapper = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Logo />
      <ToggleTheme/>
      <Hamburger/>
    </div>
  )
}

export default HeaderWrapper