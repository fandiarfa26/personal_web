import React from 'react'
import photoMe from '../assets/photome.png'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../utils/recoil';
import { translate } from '../utils/translate'

const About = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <section id="about" className="page-section">
      <div className="about__wrapper">
        <div className="section__header">
          <h1><span>01.</span> { translate[language]['Cerita Tentang Aku'] }</h1>
          <div className="line-x"></div>
        </div>
        <div className="about__content">
          <div className="about__text">
            <div className="about__story">
              <p>{ translate[language]['_cerita1'] }</p>
              <p>{ translate[language]['_cerita2'] }</p>
              <p>{ translate[language]['_cerita3'] }</p>
              <p>{ translate[language]['_cerita4'] }</p>
            </div>
          </div>
          <div className="about__photo">
            <div className="about__photo-wrapper">
              <img src={photoMe} alt="M. Fandi Arfabuma" />
              <div className="about__shadow-photo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About