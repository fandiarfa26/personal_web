import React from 'react'
import {FiArrowDown} from 'react-icons/fi';
import ScrollIntoView from 'react-scroll-into-view'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../utils/recoil';
import { translate } from '../utils/translate'

const Hero = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <section id="hero" className='page-section'>
      <div className="hero__wrapper">
        <div className="hero__greeting">{ translate[language]['_halo'] }</div>
        <h1 className="hero__name">M. Fandi Arfabuma</h1>
        <p className="hero__bio">{ translate[language]['Seorang'] } <span>Frontend Developer</span>, { translate[language]['_bio'] } <span>React & Flutter</span>.</p>
        <ScrollIntoView selector="#about">
          <button type="button" className="hero__button">
            { translate[language]['Tentang Aku'] }
            <FiArrowDown className='icon'/>
          </button>
        </ScrollIntoView>
      </div>
      
    </section>
  )
}

export default Hero