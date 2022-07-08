import React from 'react'
import { FiExternalLink, FiFigma, FiGithub, FiPlayCircle } from 'react-icons/fi'
import { TbBrandGooglePlay } from 'react-icons/tb'
import { useRecoilValue } from 'recoil'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import ProjectLink from '../IconLink'

const ProjectRow = ({year, name, assoc, tech, links}) => {
  const language = useRecoilValue(currentLanguage);
  return (
    <tr className="hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-900 dark:text-slate-300">
      <td className="py-2 font-['Inconsolata'] w-1/12 text-lg text-violet-500 dark:text-violet-400 lg:pl-5">{year}</td>
      <td className="w-5/12 px-2 py-2 font-semibold lg:w-4/12">{ translate[language][name] !== undefined ? translate[language][name] : name }</td>
      <td className="hidden w-3/12 py-2 lg:table-cell">{assoc}</td>
      <td className="hidden w-4/12 py-2 lg:table-cell">
        <div className="font-['Inconsolata'] flex items-center gap-4">
          {
            tech.map((item, i) => (
              <span key={i} className="hover:text-lg hover:text-sky-500">{item}</span>
            ))
          }
        </div>
      </td>
      <td className="w-1/12 py-2 lg:pr-5">
        <div className="flex items-center gap-2">
        {
          links.url ? (
            <ProjectLink url={links.url} icon={FiExternalLink}/>
          ) : null
        }
        {
          links.github ? (
            <ProjectLink url={links.github} icon={FiGithub}/>
          ) : null
        }
        {
          links.playstore ? (
            <ProjectLink url={links.playstore} icon={TbBrandGooglePlay}/>
          ) : null
        }
        {
          links.video ? (
            <ProjectLink url={links.video} icon={FiPlayCircle}/>
          ) : null
        }
        {
          links.figma ? (
            <ProjectLink url={links.figma} icon={FiFigma}/>
          ) : null
        }
        </div>
      </td>
    </tr>
  )
}

export default ProjectRow