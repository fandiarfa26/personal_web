import React from 'react'
import resumeFile from '../../assets/fandi-cv-resume.pdf'
import {FiFileText} from 'react-icons/fi';

const HeroResumeButton = () => {
  return (
    <div>
      <a href={resumeFile} target="_blank" className='flex items-center gap-2 px-3 py-2 border-2 rounded-lg border-rose-500 dark:border-rose-400 hover:bg-rose-500 dark:hover:bg-rose-400 hover:text-white dark:text-slate-300 dark:hover:text-white'>
        <FiFileText className='icon-sm'/>
        <span>Resume</span>
      </a>
    </div>
  )
}

export default HeroResumeButton