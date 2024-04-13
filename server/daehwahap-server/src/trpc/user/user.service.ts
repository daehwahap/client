import { Injectable } from '@nestjs/common'
import { TrpcService } from '../trpc.service'
import { z } from 'zod'

@Injectable()
export class UserService {
  constructor(private readonly trpcService: TrpcService) {}

  getUser = this.trpcService.procedure
    .input(
      z.object({
        name: z.string().optional(),
      }),
    )
    .mutation(({ input }) => {
      const { name } = input
      return {
        greeting: `Hello ${name ? name : `Bilbo`}`,
      }
    })
}
