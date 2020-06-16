import React from 'react'
import AppHeader from '@component/organism/AppHeader'
import AppLogo from '@assets/app-logo.svg'

const navLinks = [
  { label: 'Translator', href: './translator' },
  { label: 'History', href: './history' },
]

export default () => (
  <AppHeader
    logo={<AppLogo width={50} height={50} />}
    appName="Pig Latin Translator"
    navLinks={navLinks}
  />
)
