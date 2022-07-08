import React from 'react'
import { useRecoilState } from 'recoil'
import { expMenuActive } from '../../utils/recoil'

const ExpMenuItem = ({label, index}) => {
  const [active, setActive] = useRecoilState(expMenuActive);
  return (
    <li>
      <a href="#!" onClick={() => setActive(index)} className={`font-['Inconsolata'] px-4 py-3 block text-sm border-b-2 lg:border-b-0 lg:border-l-2  ${index === active ? 'border-rose-500 dark:border-rose-400 text-rose-500 dark:text-rose-400' : 'border-rose-200 dark:border-opacity-30  text-slate-500 dark:text-slate-400'} hover:text-rose-500 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-opacity-10`}>
        {label}
      </a>
    </li>
  )
}

export default ExpMenuItem