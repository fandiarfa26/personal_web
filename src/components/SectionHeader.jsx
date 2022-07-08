import React from 'react'

const SectionHeader = ({numberText, title}) => {
  return (
    <div className="flex items-center w-full gap-5 mb-5 lg:w-1/2">
      <h1 className="text-xl font-semibold lg:text-2xl text-slate-500 dark:text-slate-100">
        <span className="font-['Inconsolata'] text-violet-500 dark:text-violet-400 font-normal">{numberText}</span> { title }
      </h1>
      <div className="flex-1 border border-sky-500 dark:border-sky-600"></div>
    </div>
  )
}

export default SectionHeader