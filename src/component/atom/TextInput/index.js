import React from 'react'

import style from './style.scss'

export default React.forwardRef(({ className = '', ...props }, ref) => (
  <input className={`${className} ${style.input}`} {...props} {...{ ref }} />
))
