import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({
      data,
    })
  }
}
