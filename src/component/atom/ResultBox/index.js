import React from 'react'

import style from './style.scss'

export default ({ className = '', value = '', ...props }) => (
  <div className={`${className} ${style.resultBox}`} {...props}>
    {value}
  </div>
)
