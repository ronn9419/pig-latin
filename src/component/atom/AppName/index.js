import React from 'react'
import style from './style.scss'

export default ({ className = '', appName }) => (
  <h1 className={`${className} ${style.appName}`}>{appName}</h1>
)
