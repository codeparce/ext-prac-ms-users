import { Inject, Injectable } from '@nestjs/common';
import type { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class DeleteUserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(id: string): Promise<void> {
    return this.userRepo.delete(id);
  }
}