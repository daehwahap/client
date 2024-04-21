import { trpc } from '../../trpc'

const TrpcPage = async () => {
  await trpc.createUser.mutate({ email: 'aa', name: 'aa', password: 'aa' })

  // return <div>{greeting}</div>
  return null
}

export default TrpcPage
