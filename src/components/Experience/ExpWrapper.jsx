import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import SectionHeader from '../SectionHeader'
import ExpBody from './ExpBody'

const ExpWrapper = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="w-5/6 xl:w-3/5">
      <SectionHeader numberText="03." title={translate[language]['Pengalaman']} />
      <ExpBody/>
    </div>
  )
}

export default ExpWrapper