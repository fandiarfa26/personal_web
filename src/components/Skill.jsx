import React from 'react'
import {skills} from '../utils/data'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../utils/recoil';
import { translate } from '../utils/translate'

const Skill = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <section id="skill" className="page-section">
      <div className="skill__wrapper">
        <div className="section__header">
          <h1><span>02.</span> { translate[language]['Kemampuan'] }</h1>
          <div className="line-x"></div>
        </div>
        <div className="skill__content">
          <h2>{ translate[language]['_skill1'] }</h2>
          <ul className="skill__items">
            {
              skills.hard.map((item, i) => <li key={i}>{item}</li>)
            }
          </ul>
        </div>
        <div className="skill__content">
          <h2>{ translate[language]['_skill2'] }</h2>
          <ul className="skill__items">
            {
              skills.soft.map((item, i) => <li key={i}>{ translate[language][item] }</li>)
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skill