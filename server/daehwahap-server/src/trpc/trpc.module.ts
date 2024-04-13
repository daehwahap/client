import { Module, forwardRef } from '@nestjs/common'
import { TrpcService } from './trpc.service'
import { TrpcRouter } from './trpc.router'
import { UserModule } from 'src/trpc/user/user.module'

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
