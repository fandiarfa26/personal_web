import React from 'react'
import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../utils/recoil';
import { translate } from '../utils/translate'

const Footer = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <footer className='footer'>
      <div>{ translate[language]['Di desain dan dibuat oleh'] } M. Fandi Arfabuma</div>
      <div>{ translate[language]['Inspirasi dari'] } <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">brittanychiang.com</a></div>
      <div>&copy; 2022</div>
    </footer>
  )
}

export default Footer