import React from 'react'
import { social } from '../utils/data'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../utils/recoil';
import { translate } from '../utils/translate'

const Contact = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <section id="contact" className='page-section'>
      <div className="contact__wrapper">
        <div className="section__header">
          <h1><span>05.</span> { translate[language]['Kontak'] }</h1>
          <div className="line-x"></div>
        </div>
        <div className="contact__content">
          <h1>{ translate[language]['Terima Kasih'] }</h1>
          <p>{ translate[language]['_contactme'] }</p>
          <a href={`mailto:${social.email}`}>{ translate[language]['Hubungi Aku'] }</a>
        </div>
      </div>
    </section>
  )
}

export default Contact