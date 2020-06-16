import React from 'react'

import NavLinks from '@component/molecule/NavLinks'
import AppName from '@component/atom/AppName'

import style from './style.scss'

export default ({ logo, appName, navLinks }) => (
  <div className={style.appHeader}>
    <div className={style.appLogoContainer}>
      {logo} <AppName className={style.appName} {...{ appName }} />
    </div>
    <NavLinks links={navLinks} className={style.nav} />
  </div>
)
