import { trpc } from '../../trpc'

const TrpcPage = async () => {
  const { greeting } = await trpc.getUser.mutate({ name: `Tom` })

  return <div>{greeting}</div>
}

export default TrpcPage
