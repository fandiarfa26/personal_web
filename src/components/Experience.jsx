import React, {useState} from 'react'
import { experiences } from '../utils/data'
import { FiChevronRight } from 'react-icons/fi'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../utils/recoil';
import { translate } from '../utils/translate'

const Experience = () => {
  const [active, setActive] = useState(0);
  const language = useRecoilValue(currentLanguage);

  return (
    <section id="experience" className="page-section">
      <div className="experience__wrapper">
        <div className="section__header">
          <h1><span>03.</span> { translate[language]['Pengalaman'] }</h1>
          <div className="line-x"></div>
        </div>
        <div className="experience__body">
          <ul className="experience__sidebar">
            {
              experiences.map((exp, i) => (
                <li key={i} className={`experience__menu-item ${i === active ? 'active' : ''}`}>
                  <a href="#!" onClick={() => setActive(i)}>{exp.name}</a>
                </li>
              ))
            }
          </ul>
          <div className="experience__content">
            {
              experiences.map((exp, i) => (
                <article key={i} className={`experience__item ${i === active ? '' : 'hidden'}`}>
                  <h2 className="experience__item-header">{exp.role} <span>@ {exp.name}</span></h2>
                  <p className="experience__item-detail">{ translate[language][exp.time] } | { translate[language][exp.type] }</p>
                  <ul className="experience__notes">
                    {
                      ( language === 'id'? exp.notes : exp.notes_en).map((note, j) => (
                        <li className="experience__note-item" key={j}>
                          <FiChevronRight className="icon-sm"/>
                          <span>{note}</span>
                        </li>
                      ))
                    }
                  </ul>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience