import React from 'react'
import HeroAboutButton from './HeroAboutButton'
import HeroBio from './HeroBio'
import HeroGreeting from './HeroGreeting'
import HeroName from './HeroName'

const HeroWrapper = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-10">
      <HeroGreeting/>
      <HeroName/>
      <HeroBio/>
      <HeroAboutButton/>
    </div>
  )
}

export default HeroWrapper