import React from 'react'
import { projects } from '../utils/data'
import { FiExternalLink, FiGithub, FiPlayCircle, FiFigma } from 'react-icons/fi'
import {TbBrandGooglePlay} from 'react-icons/tb'

const Project = () => {
  return (
    <section id="project" className='page-section'>
      <div className="project__wrapper">
        <div className="section__header">
          <h1><span>04.</span> Yang pernah dikerjakan</h1>
          <div className="line-x"></div>
        </div>
        <table className="project__table">
          <thead>
            <tr>
              <th>Tahun</th>
              <th>Nama</th>
              <th>Asosiasi</th>
              <th>Teknologi</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {
              projects.map((project, i) => (
                <tr key={i} className="project-table__row">
                  <td className="project-table__year">{project.year}</td>
                  <td className="project-table__name">{project.name}</td>
                  <td className="project-table__assoc">{project.assoc}</td>
                  <td className="project-table__tech">
                    <div>
                    {
                      project.tech.map((tech, j) => (
                        <span key={j}>{tech}</span>
                      ))
                    }
                    </div>
                  </td>
                  <td className="project-table__link">
                    <div>
                    {
                      project.links.url ? (
                        <a href={project.links.url} target="_blank" rel="noreferrer">
                          <FiExternalLink className='icon'/>
                        </a>
                      ) : null
                    }
                    {
                      project.links.github ? (
                        <a href={project.links.github} target="_blank" rel="noreferrer">
                          <FiGithub className='icon'/>
                        </a>
                      ) : null
                    }
                    {
                      project.links.playstore ? (
                        <a href={project.links.playstore} target="_blank" rel="noreferrer">
                          <TbBrandGooglePlay className='icon'/>
                        </a>
                      ) : null
                    }
                    {
                      project.links.video ? (
                        <a href={project.links.video} target="_blank" rel="noreferrer">
                          <FiPlayCircle className='icon'/>
                        </a>
                      ) : null
                    }
                    {
                      project.links.figma ? (
                        <a href={project.links.figma} target="_blank" rel="noreferrer">
                          <FiFigma className='icon'/>
                        </a>
                      ) : null
                    }
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Project