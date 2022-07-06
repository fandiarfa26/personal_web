import React, {useState} from 'react'
import { experiences } from '../utils/data'
import { FiChevronRight } from 'react-icons/fi'

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="page-section">
      <div className="experience__wrapper">
        <div className="section__header">
          <h1><span>03.</span> Pengalaman</h1>
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
                <article className={`experience__item ${i === active ? '' : 'hidden'}`}>
                  <h2 className="experience__item-header">{exp.role} <span>@ {exp.name}</span></h2>
                  <p className="experience__item-detail">{exp.time} | {exp.type}</p>
                  <ul className="experience__notes">
                    {
                      exp.notes.map((note, j) => (
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