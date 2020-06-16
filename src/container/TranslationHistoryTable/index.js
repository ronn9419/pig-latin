import React from 'react'

import translationHistoryService from '@service/translationHistory'
import pigTranslator from '@utils/pigTranslator'

import Button from '@component/atom/Button'
import TranslationHistoryTable from '@component/molecule/TranslationHistoryTable'

export default () => {
  const history = translationHistoryService.getHistory()
  const [time, updateTime] = React.useState(null)

  const translatedHistory = React.useMemo(() => {
    return history.map((original) => ({
      original,
      translated: pigTranslator(original),
    }))
  }, [history])

  const clearStorage = React.useCallback(() => {
    translationHistoryService.clear()
    updateTime(Date.now())
  }, [])

  if (!translatedHistory.length) {
    return <div>No History</div>
  }

  return (
    <TranslationHistoryTable
      history={translatedHistory}
      onClear={clearStorage}
    />
  )
}
