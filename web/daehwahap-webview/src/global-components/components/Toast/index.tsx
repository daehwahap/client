'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal, useGlobalComponentContext } from '@daehwahap/global-components'

interface ToastProps {
  text: string
  position?: 'top' | 'middle' | 'bottom'
  duration?: number
}

const Toast = ({ text, position = 'top', duration = 2000 }: ToastProps) => {
  // 이거는 Toast에만 해당하는 context임
  const { hide } = useGlobalComponentContext()

  useEffect(() => {
    setTimeout(() => {
      hide()
    }, duration)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 60,
          width: '100vw',
          maxWidth: '720px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: '#000000BF',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '12px',
          }}
        >
          {text}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default createPortal(Toast)
