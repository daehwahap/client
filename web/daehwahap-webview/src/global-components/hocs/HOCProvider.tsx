'use client'

import { ReactNode } from 'react'
import Toast from '../components/Toast'

type HOCProviderProps = { children: ReactNode }

const HOCProvider = ({ children }: HOCProviderProps) => {
  return (
    <>
      {children}
      <div style={{ position: 'absolute' }}>
        <Toast.Portal />
      </div>
    </>
  )
}

export default HOCProvider
