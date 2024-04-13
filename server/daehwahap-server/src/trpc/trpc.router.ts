import { UserController } from './user/user.controller'
import { INestApplication, Injectable } from '@nestjs/common'
import { TrpcService } from './trpc.service'
import * as trpcExpress from '@trpc/server/adapters/express'

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userController: UserController,
  ) {}

  mergeRouter = this.trpcService.mergeRouters(this.userController.userController)

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.mergeRouter,
      }),
    )
  }
}

export type AppRouter = TrpcRouter[`mergeRouter`]
