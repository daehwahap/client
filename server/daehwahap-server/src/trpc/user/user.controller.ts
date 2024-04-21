import { UserService } from './user.service'
import { Injectable } from '@nestjs/common'
import { TrpcService } from '../trpc.service'

@Injectable()
export class UserController {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly UserService: UserService,
  ) {
    this.router = this.trpcService.router({
      createUser: this.UserService.createUser,
    })
  }

  router
}
