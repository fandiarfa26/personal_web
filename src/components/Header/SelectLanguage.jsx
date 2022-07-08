import React from 'react'
import { useRecoilState } from 'recoil'
import { currentLanguage } from '../../utils/recoil'

const SelectLanguage = () => {
  const [language, setLanguage] = useRecoilState(currentLanguage);

  return (
    <select onChange={(e) => setLanguage(e.target.value)} defaultValue={language} className="px-3 py-2 font-semibold bg-white border-2 border-transparent border-dashed rounded-lg cursor-pointer dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:border-rose-500">
      <option value="id">ID</option>
      <option value="en">EN</option>
    </select>
  )
}

export default SelectLanguage