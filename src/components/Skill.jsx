import React from 'react'
import {skills} from '../utils/data'

const Skill = () => {
  return (
    <section id="skill" className="page-section">
      <div className="skill__wrapper">
        <div className="section__header">
          <h1><span>02.</span> Kemampuan</h1>
          <div className="line-x"></div>
        </div>
        <div className="skill__content">
          <h2>Beberapa teknologi yang telah dicoba</h2>
          <ul className="skill__items">
            {
              skills.hard.map((item, i) => <li key={i}>{item}</li>)
            }
          </ul>
        </div>
        <div className="skill__content">
          <h2>Kemampuan yang mendukung dalam pekerjaan</h2>
          <ul className="skill__items">
            {
              skills.soft.map((item, i) => <li key={i}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skill