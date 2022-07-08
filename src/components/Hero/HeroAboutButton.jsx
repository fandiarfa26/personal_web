import React from 'react'
import {FiArrowDown} from 'react-icons/fi';
import ScrollIntoView from 'react-scroll-into-view'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../../utils/recoil';
import { translate } from '../../utils/translate';

const HeroAboutButton = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <ScrollIntoView selector="#about" className="absolute inset-x-0 bottom-0 flex justify-center mb-10">
        <button type="button" className="flex flex-col items-center px-5 py-3 animate-bounce text-slate-900 dark:text-slate-100 hover:text-rose-500 dark:hover:text-rose-400">
          { translate[language]['Tentang Aku'] }
          <FiArrowDown className='icon'/>
        </button>
    </ScrollIntoView>
  )
}

export default HeroAboutButton