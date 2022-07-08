import React from 'react'

const SkillContent = (props) => {
  return (
    <div className="w-full mb-10">
      <h2 className="my-5 text-lg font-bold text-center lg:text-xl text-slate-900 dark:text-slate-300">{props.title}</h2>
      {props.children}
    </div>
  )
}

export default SkillContent