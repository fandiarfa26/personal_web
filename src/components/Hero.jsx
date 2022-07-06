import React from 'react'
import {FiArrowDown} from 'react-icons/fi';
import ScrollIntoView from 'react-scroll-into-view'

const Hero = () => {
  return (
    <section id="hero" className='page-section'>
      <div className="hero__wrapper">
        <div className="hero__greeting">Halo semua, salam kenal.</div>
        <h1 className="hero__name">M. Fandi Arfabuma</h1>
        <p className="hero__bio">Seorang <span>Frontend Developer</span>, tertarik pada interaktif, desain antarmuka, dan optimalisasi website dan aplikasi mobile. Saat ini, aku sedang fokus belajar <span>React & Flutter</span>.</p>
        <ScrollIntoView selector="#about">
          <button type="button" className="hero__button">
            Tentang Aku
            <FiArrowDown className='icon'/>
          </button>
        </ScrollIntoView>
      </div>
      
    </section>
  )
}

export default Hero