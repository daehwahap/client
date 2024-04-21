import { UserController } from './user/user.controller'
import { INestApplication, Injectable } from '@nestjs/common'
import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from './trpc.service'

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly userController: UserController,
    private readonly trpcService: TrpcService,
  ) {
    this.mergeRouter = this.trpcService.mergeRouters(this.userController.router)
  }

  mergeRouter

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.mergeRouter,
      }),
    )
  }
}

export type AppRouter = TrpcRouter['mergeRouter']
