'use client'

import { trpc } from '../../trpc'

const TrpcPage = async () => {
  const handleSignIn = async () => {
    const response = await trpc.createUser.mutate({ email: 'aa', password: 'aa', name: 'aa' })
    console.log(response)
  }
  const getUser = async () => {
    const user = await trpc.getUser.query({ aa: 'aa' })
    console.log(user)
  }

  return (
    <div>
      <button style={{ padding: 30, margin: 30, backgroundColor: 'white' }} onClick={handleSignIn}>
        <p style={{ color: 'red' }}>회원가이버</p>
      </button>
      <button style={{ padding: 30, margin: 30, backgroundColor: 'white' }} onClick={getUser}>
        <p style={{ color: 'blue' }}>확인</p>
      </button>
    </div>
  )
}

export default TrpcPage
