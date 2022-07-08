import React from 'react'

const ExpItemHeader = ({role, name}) => {
  return (
    <h2 className="text-lg font-semibold lg:text-xl text-slate-900 dark:text-slate-300">
      {role} <span className="text-sky-500">@ {name}</span>
    </h2>
  )
}

export default ExpItemHeader