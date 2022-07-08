import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentLanguage } from '../../utils/recoil'
import AboutContent from './AboutContent'
import SectionHeader from '../SectionHeader'
import { translate } from '../../utils/translate'

const AboutWrapper = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="w-5/6 md:w-4/5 xl:w-3/5">
      <SectionHeader numberText="01." title={translate[language]['Cerita Tentang Aku']} />
      <AboutContent />
    </div>
  )
}

export default AboutWrapper