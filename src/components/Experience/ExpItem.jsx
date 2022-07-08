import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentLanguage, expMenuActive } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import ExpItemDetail from './ExpItemDetail'
import ExpItemHeader from './ExpItemHeader'
import ExpNotes from './ExpNotes'

const ExpItem = ({exp, index}) => {
  const active = useRecoilValue(expMenuActive);
  const language = useRecoilValue(currentLanguage);
  return (
    <article className={`space-y-1 ${index === active ? '' : 'hidden'}`}>
      <ExpItemHeader role={exp.role} name={exp.name} />
      <ExpItemDetail text={`${translate[language][exp.time]} | ${ translate[language][exp.type] }`} />
      <ExpNotes notes={language === 'id'? exp.notes : exp.notes_en}/>
    </article>
  )
}

export default ExpItem