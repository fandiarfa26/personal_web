import React from 'react'
import { useRecoilValue } from 'recoil'
import { skills } from '../../utils/data'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import SectionHeader from '../SectionHeader'
import SkillContent from './SkillContent'
import SkillItems from './SkillItems'

const SkillWrapper = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="w-5/6 xl:w-3/6">
      <SectionHeader numberText="02." title={translate[language]['Kemampuan']} />
      <SkillContent title={ translate[language]['_skill1'] }>
        <SkillItems items={skills.hard} />
      </SkillContent>
      <SkillContent title={ translate[language]['_skill2'] }>
        <SkillItems items={skills.soft.map(item => translate[language][item])} />
      </SkillContent>
    </div>
  )
}

export default SkillWrapper