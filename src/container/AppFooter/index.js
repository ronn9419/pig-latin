import React from 'react'
import AppFooter from '@component/organism/AppFooter'

const navLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Facebook', href: '/facebook' },
  { label: 'LinkedIn', href: '/linkedIn' },
  { label: 'Instagram', href: '/instagram' },
]

export default () => (
  <AppFooter appName={'Pig Latin Translator'} navLinks={navLinks} />
)
