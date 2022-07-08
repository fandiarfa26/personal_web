import React from 'react'
import { FiX } from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import { isNavOpen } from '../../utils/recoil'

const Hamburger = () => {
  const [open, setOpen] = useRecoilState(isNavOpen)
  return (
    <div className="flex justify-end flex-1 lg:hidden">
    <a href="#!" className=' text-slate-900 dark:text-slate-100' onClick={() => setOpen(!open)}>
      <FiX className={`icon ${open? 'rotate-0' : 'rotate-45'}`} />
    </a>
    </div>
  )
}

export default Hamburger