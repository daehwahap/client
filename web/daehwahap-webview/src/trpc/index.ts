import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AppRouter } from '@daehwahap/daehwahap-server/src/trpc/trpc.router'

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8080/trpc', // you should update this to use env variables
    }),
  ],
})
