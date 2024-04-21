import { UserRepository } from './user.repository'
import { Injectable } from '@nestjs/common'
import { TrpcService } from '../trpc.service'
import { UserCreateInputSchema } from '../../../prisma/dto/zod'

@Injectable()
export class UserService {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userRepository: UserRepository,
  ) {
    this.createUser = this.trpcService.procedure
      .input(UserCreateInputSchema)
      .mutation(({ input }) => {
        this.userRepository.createUser(input)
      })
  }

  createUser
}
