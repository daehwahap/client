import { UserService } from './user.service'
import { Injectable } from '@nestjs/common'
import { TrpcService } from '../trpc.service'
import { z } from 'zod'

@Injectable()
export class UserController {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly UserService: UserService,
  ) {}

  userController = this.trpcService.router({
    getUser: this.UserService.getUser,
  })
}
