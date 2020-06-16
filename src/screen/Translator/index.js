import React from 'react'

import AppShell from '@component/template/AppShell'

import AppHeader from '@container/AppHeader'
import AppFooter from '@container/AppFooter'

import TranslatorForm from './container/TranslatorForm'

export default () => (
  <AppShell
    header={<AppHeader />}
    content={<TranslatorForm />}
    footer={<AppFooter />}
  />
)
