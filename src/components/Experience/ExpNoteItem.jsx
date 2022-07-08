import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const ExpNoteItem = ({note}) => {
  return (
    <li className="flex items-start gap-3">
      <FiChevronRight className="icon-sm text-violet-500 dark:text-violet-400"/>
      <span className="flex-1 text-slate-900 dark:text-slate-300">{note}</span>
    </li>
  )
}

export default ExpNoteItem