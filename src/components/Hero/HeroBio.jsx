import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import HighlighterText from '../HighlighterText'

const HeroBio = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <p className="w-5/6 text-center lg:w-2/5 lg:text-xl text-slate-900 dark:text-slate-200">
      { translate[language]['Seorang'] } <HighlighterText text="Frontend Developer"/>, { translate[language]['_bio'] } <HighlighterText text="React & Flutter"/>.
    </p>
  )
}

export default HeroBio