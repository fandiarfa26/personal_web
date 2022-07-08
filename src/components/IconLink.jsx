import React from 'react'

const IconLink = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer" className="hover:text-rose-500 dark:hover:text-rose-400 text-slate-900 dark:text-slate-100">
      <props.icon className='icon'/>
    </a>
  )
}

export default IconLink