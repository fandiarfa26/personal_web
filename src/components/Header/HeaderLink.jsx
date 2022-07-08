import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { currentLanguage, isNavOpen } from '../../utils/recoil';
import { translate } from '../../utils/translate';

const HeaderLink = ({menu, index}) => {
  const language = useRecoilValue(currentLanguage);
  const setOpen = useSetRecoilState(isNavOpen);

  return (
    <ScrollIntoView selector={menu.target}>
      <a href="#!" onClick={() => setOpen(false)} className="hover:text-rose-500 dark:hover:text-rose-400 text-slate-900 dark:text-slate-100">
        <span className="text-violet-500 dark:text-violet-400">{`0${index+1}.`}</span>
        { translate[language][menu.label] }
      </a>
    </ScrollIntoView>
  )
}

export default HeaderLink