import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

const Logo = () => {
  return (
    <ScrollIntoView selector="#hero" className="flex-1">
      <a href="#!" className="flex items-center justify-center w-12 h-12 text-3xl font-semibold border-2 border-transparent border-dashed rounded-lg text-slate-900 dark:text-slate-100 hover:border-rose-500 active:text-rose-500 dark:active:text-rose-400">
        fa
      </a>
    </ScrollIntoView>
  )
}

export default Logo