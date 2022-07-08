import React from 'react'
import { useRecoilValue } from 'recoil'
import { translate } from '../../utils/translate'
import { currentLanguage } from '../../utils/recoil';

const AboutText = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="order-2 w-full space-y-5 lg:w-3/5 lg:pr-10 lg:order-1 text-slate-900 dark:text-slate-300">
      <p>{ translate[language]['_cerita1'] }</p>
      <p>{ translate[language]['_cerita2'] }</p>
      <p>{ translate[language]['_cerita3'] }</p>
      <p>{ translate[language]['_cerita4'] }</p>
    </div>
  )
}

export default AboutText