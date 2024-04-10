import { trpc } from '../../trpc'

const TrpcPage = async () => {
  const { greeting } = await trpc.hello.query({ name: `Tom` });

  return <div>{greeting}</div>
}

export default TrpcPage
