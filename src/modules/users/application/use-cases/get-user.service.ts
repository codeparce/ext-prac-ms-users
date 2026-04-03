import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class GetUserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(id: string) {
    const user = await this.userRepo.findById(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }
}