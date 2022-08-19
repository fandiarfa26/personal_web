import React from 'react'
import HeroAboutButton from './HeroAboutButton'
import HeroBio from './HeroBio'
import HeroGreeting from './HeroGreeting'
import HeroName from './HeroName'
import HeroResumeButton from './HeroResumeButton'

const HeroWrapper = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-10">
      <HeroGreeting/>
      <HeroName/>
      <HeroBio/>
      <HeroResumeButton/>
      <HeroAboutButton/>
    </div>
  )
}

export default HeroWrapper