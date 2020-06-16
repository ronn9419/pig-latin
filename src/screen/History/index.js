import React from 'react'

import AppShell from '@component/template/AppShell'

import AppHeader from '@container/AppHeader'
import AppFooter from '@container/AppFooter'

import TranslationHistoryTable from '@container/TranslationHistoryTable'

export default () => (
  <AppShell
    header={<AppHeader />}
    content={<TranslationHistoryTable />}
    footer={<AppFooter />}
  />
)
