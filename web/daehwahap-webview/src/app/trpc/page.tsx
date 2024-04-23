import { trpc } from '../../trpc'

 const TrpcPage = async() =>  {
  const { greeting } = await trpc.createUser.mutate({ greeting: 'aa' })

  return <div>{greeting}</div>
}

export default TrpcPage
