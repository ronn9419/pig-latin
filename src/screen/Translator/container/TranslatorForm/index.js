import React from 'react'
import { useForm } from 'react-hook-form'

import pigTranslator from '@utils/pigTranslator'
import translationHistoryService from '@service/translationHistory'

import TextInput from '@component/atom/TextInput'
import Button from '@component/atom/Button'
import ResultBox from '@component/atom/ResultBox'

import style from './style.scss'

export default () => {
  const { register, handleSubmit, reset } = useForm()
  const [translated, setTranslated] = React.useState('')

  const onSubmit = React.useCallback((values) => {
    translationHistoryService.append(values.word)
    setTranslated(pigTranslator(values.word))
    reset()
  }, [])

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <ResultBox value={translated} />
      <TextInput
        placeholder="Type word here"
        ref={register({ required: true })}
        name="word"
      />
      <Button type="submit">Translate</Button>
    </form>
  )
}
