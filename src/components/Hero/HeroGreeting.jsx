import React from 'react'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../../utils/recoil';
import { translate } from '../../utils/translate'

const HeroGreeting = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="font-['Inconsolata'] text-xl text-violet-500 dark:text-violet-400 font-semibold">
      { translate[language]['_halo'] }
    </div>
  )
}

export default HeroGreeting