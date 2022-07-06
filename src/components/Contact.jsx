import React from 'react'
import { social } from '../utils/data'

const Contact = () => {
  return (
    <section id="contact" className='page-section'>
      <div className="contact__wrapper">
        <div className="section__header">
          <h1><span>05.</span> Kontak</h1>
          <div className="line-x"></div>
        </div>
        <div className="contact__content">
          <h1>Terima Kasih</h1>
          <p>Jika kamu memiliki pertanyaan, emailku selalu terbuka untuk siapapun. Kita dapat berdiskusi dan bisa jadi berkolaborasi.</p>
          <a href={`mailto:${social.email}`}>Hubungi Aku</a>
        </div>
      </div>
    </section>
  )
}

export default Contact