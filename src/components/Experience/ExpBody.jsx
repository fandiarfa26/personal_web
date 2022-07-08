import React from 'react'
import ExpContent from './ExpContent'
import ExpSidebar from './ExpSidebar'

const ExpBody = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <ExpSidebar/>
      <ExpContent/>
    </div>
  )
}

export default ExpBody