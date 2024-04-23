'use client'

import { trpc } from '../../trpc'

const TrpcPage = async () => {
  const handleSignIn = await trpc.createUser.mutate({ email: 'aa', password: 'aa', name: 'aa' })

  return (
    <div>
      <button onClick={handleSignIn}>회원가이버</button>
      <button onClick={handleSignIn}>회원가이버</button>
    </div>
  )
}

export default TrpcPage
