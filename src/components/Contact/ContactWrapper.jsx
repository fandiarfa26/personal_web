import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentLanguage } from '../../utils/recoil'
import { translate } from '../../utils/translate'
import ContactContent from './ContactContent'
import SectionHeader from '../SectionHeader'

const ContactWrapper = () => {
  const language = useRecoilValue(currentLanguage);
  return (
    <div className="w-5/6 lg:w-2/5">
      <SectionHeader numberText="05." title={translate[language]['Kontak']} />
      <ContactContent/>
    </div>
  )
}

export default ContactWrapper