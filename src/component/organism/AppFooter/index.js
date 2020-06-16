import React from 'react'
import NavLinks from '@component/molecule/NavLinks'

import style from './style.scss'

export default ({ navLinks, appName }) => {
  const year = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <div className={style.appFooter}>
      <div className={style.appName}>
        {year} &copy; {appName}
      </div>
      <NavLinks links={navLinks} className={style.nav} />
    </div>
  )
}
