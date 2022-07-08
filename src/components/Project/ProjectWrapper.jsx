import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import SectionHeader from '../SectionHeader'
import ProjectTable from './ProjectTable'

const ProjectWrapper = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="w-5/6 lg:w-2/3">
      <SectionHeader numberText="04." title={translate[language]['Yang pernah dibuat']} />
      <ProjectTable/>
    </div>
  )
}

export default ProjectWrapper