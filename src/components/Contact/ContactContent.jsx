import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import { social } from '../../utils/data'

const ContactContent = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="space-y-5 text-center">
      <h1 className="mt-10 text-3xl font-semibold lg:text-5xl text-slate-500 dark:text-slate-400">{ translate[language]['Terima Kasih'] }</h1>
      <p className="lg:text-lg text-slate-900 dark:text-slate-300">{ translate[language]['_contactme'] }</p>
      <a href={`mailto:${social.email}`} className="font-['Inconsolata'] inline-block lg:text-lg py-2 px-3 border-2 border-rose-500 dark:border-rose-400 rounded-lg hover:bg-rose-500 dark:hover:bg-rose-400 hover:text-white dark:text-slate-300 dark:hover:text-white">
        { translate[language]['Hubungi Aku'] }
      </a>
    </div>
  )
}

export default ContactContent