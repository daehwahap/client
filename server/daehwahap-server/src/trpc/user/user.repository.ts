import { UserCreateInputSchema } from 'prisma/dto/zod'
import { Injectable } from '@nestjs/common'
import { Prisma } from 'prisma/lib'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({
      data,
    })
  }
}
