import React from 'react'

import style from './style.scss'

export default ({ className = '', ...props }) => (
  <th className={`${className} ${style.th}`} {...props} />
)
