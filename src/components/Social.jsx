import React from 'react'
import { social } from '../utils/data'
import { FiGithub, FiFacebook, FiInstagram, FiTwitter, FiLinkedin} from 'react-icons/fi'

const Social = () => {
  return (
    <div className="social">
      <div className="social__left">
        <a href={social.github} target="_blank" rel="noreferrer">
          <FiGithub className='icon'/>
        </a>
        <a href={social.linkedin} target="_blank" rel="noreferrer">
          <FiLinkedin className='icon'/>
        </a>
        <a href={social.facebook} target="_blank" rel="noreferrer">
          <FiFacebook className='icon'/>
        </a>
        <a href={social.instagram} target="_blank" rel="noreferrer">
          <FiInstagram className='icon'/>
        </a>
        <a href={social.twitter} target="_blank" rel="noreferrer">
          <FiTwitter className='icon'/>
        </a>
        <div className='line'></div>
      </div>
      <div className="social__right">
        <a href={`mailto:${social.email}`}>{social.email}</a>
        <div className='line'></div>
      </div>
    </div>
  )
}

export default Social