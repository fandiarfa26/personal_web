import React from 'react'
import { useRecoilValue } from 'recoil'
import { projects } from '../../utils/data'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import ProjectRow from './ProjectRow'

const ProjectTable = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <table className="w-full">
      <thead>
        <tr className="text-slate-900 dark:text-slate-300">
          <th className="w-1/12 py-2 pl-2 text-left lg:pl-5">{ translate[language]['Tahun'] }</th>
          <th className="w-4/12 px-2 py-2 text-left">{ translate[language]['Nama'] }</th>
          <th className="hidden w-3/12 py-2 text-left lg:table-cell">{ translate[language]['Asosiasi'] }</th>
          <th className="hidden w-4/12 py-2 text-left lg:table-cell">{ translate[language]['Teknologi'] }</th>
          <th className="w-1/12 py-2 text-left">Link</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map((project, i) => (
            <ProjectRow key={i} {...project} />
          ))
        }
      </tbody>
    </table>
  )
}

export default ProjectTable