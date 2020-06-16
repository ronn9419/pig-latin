import React from 'react'

import style from './style.scss'

export default ({ className = '', ...props }) => (
  <td className={`${className} ${style.td}`} {...props} />
)
