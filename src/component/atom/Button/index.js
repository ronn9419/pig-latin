import React from 'react'

import style from './style.scss'

export default ({ className = '', ...props }) => (
  <button className={`${className} ${style.button}`} {...props} />
)
