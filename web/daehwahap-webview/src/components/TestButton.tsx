'use client'

import Toast from '../global-components/components/Toast'

export const TestButton = () => {
  return (
    <button
      style={{ backgroundColor: 'black', width: 100, height: 100 }}
      onClick={() => {
        console.log('toast')
        Toast.show({ text: 'toast' })
      }}
    >
      aaaaaaa
    </button>
  )
}
