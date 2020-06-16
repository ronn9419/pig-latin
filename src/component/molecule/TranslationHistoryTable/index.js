import React from 'react'

import TableHeader from '@component/atom/TableHeader'
import TableData from '@component/atom/TableData'
import Button from '@component/atom/Button'

import style from './style.scss'

export default ({ className = '', onClear, history }) => (
  <div className={`${className} ${style.container}`}>
    <table className={style.table}>
      <thead>
        <tr>
          <TableHeader>Original</TableHeader>
          <TableHeader>Translated</TableHeader>
        </tr>
      </thead>
      <tbody>
        {history.map(({ original, translated }, i) => (
          <tr className={style.row} key={i}>
            <TableData>{original}</TableData>
            <TableData>{translated}</TableData>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      <Button onClick={onClear}>Clear</Button>
    </div>
  </div>
)
