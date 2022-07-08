import React from 'react'

const SkillItems = ({items}) => {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {
        items.map((item, i) => (
          <li key={i} className="font-['Inconsolata'] px-3 py-2 rounded-lg lg:text-lg border-2 border-sky-500 text-sky-500  cursor-default hover:bg-sky-500 hover:text-slate-100">
            { item }
          </li>
        ))
      }
    </ul>
  )
}

export default SkillItems