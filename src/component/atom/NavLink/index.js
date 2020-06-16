import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.scss'

export default ({ href, children }) => (
  <NavLink to={href} className={style.link} activeClassName={style.active}>
    {children}
  </NavLink>
)
