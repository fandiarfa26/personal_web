import React from 'react'
import { useRecoilValue } from 'recoil'
import photoMe from '../../assets/photome.png'
import photoNight from '../../assets/photome2.png'
import { isThemeDark } from '../../utils/recoil'

const AboutPhoto = () => {
  const isDark = useRecoilValue(isThemeDark);
  return (
    <div className="flex justify-center order-1 w-full lg:w-2/5 lg:order-2">
      <div className="relative self-start group h-80 w-60">
        <img src={isDark ? photoNight : photoMe} alt="M. Fandi Arfabuma" className="absolute top-0 left-0 z-20 rounded-lg group-hover:top-2 group-hover:left-2 w-60 h-60 lg:w-72 lg:h-72 max-w-max" />
        <div className="absolute z-10 rounded-lg top-5 left-5 bg-sky-500 dark:bg-sky-600 w-60 lg:w-72 h-60 lg:h-72"></div>
        <div className="absolute z-0 rounded-lg group-hover:top-8 group-hover:left-8 top-10 left-10 bg-sky-600 dark:bg-sky-700 w-60 lg:w-72 h-60 lg:h-72"></div>
      </div>
    </div>
  )
}

export default AboutPhoto