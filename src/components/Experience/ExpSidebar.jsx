import React from 'react'
import { experiences } from '../../utils/data'
import ExpMenuItem from './ExpMenuItem'

const ExpSidebar = () => {
  return (
    <ul className="flex flex-row flex-1 overflow-x-auto lg:flex-col lg:w-1/4 whitespace-nowrap">
      {
        experiences.map((exp, i) => <ExpMenuItem key={i} label={exp.name} index={i} />)
      }
    </ul>
  )
}

export default ExpSidebar