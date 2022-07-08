import React from 'react'
import { experiences } from '../../utils/data'
import ExpItem from './ExpItem'

const ExpContent = () => {
  return (
    <div className="w-full px-5 py-5 lg:w-3/4 lg:py-2">
      {
        experiences.map((exp, i) => <ExpItem key={i} exp={exp} index={i} />)
      }
    </div>
  )
}

export default ExpContent