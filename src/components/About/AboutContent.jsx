import React from 'react'
import AboutPhoto from './AboutPhoto'
import AboutText from './AboutText'

const AboutContent = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <AboutText />
      <AboutPhoto />
    </div>
  )
}

export default AboutContent