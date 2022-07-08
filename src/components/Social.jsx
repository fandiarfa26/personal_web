import React from 'react'
import { social } from '../utils/data'
import { FiGithub, FiFacebook, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'
import IconLink from './IconLink'

const Social = () => {
  return (
    <div>
      <div className="left-0 flex flex-row items-center justify-center gap-5 px-10 lg:fixed lg:bottom-0 lg:flex-col bg-slate-50 lg:bg-transparent dark:bg-slate-900 lg:dark:bg-transparent">
        <IconLink url={social.github} icon={FiGithub}/>
        <IconLink url={social.linkedin} icon={FiLinkedin}/>
        <IconLink url={social.facebook} icon={FiFacebook}/>
        <IconLink url={social.instagram} icon={FiInstagram}/>
        <IconLink url={social.twitter} icon={FiTwitter}/>
        <div className="hidden h-32 border lg:block border-sky-500 dark:border-sky-600"></div>
      </div>
      <div className="fixed bottom-0 right-0 flex-col items-center hidden gap-5 -mr-10 lg:flex">
        <a href={`mailto:${social.email}`} className="rotate-90 -translate-y-20 text-slate-900 dark:text-slate-100 hover:text-rose-500 dark:hover:text-rose-400">{social.email}</a>
        <div className="hidden h-32 border lg:block border-sky-500 dark:border-sky-600"></div>
      </div>
    </div>
  )
}

export default Social