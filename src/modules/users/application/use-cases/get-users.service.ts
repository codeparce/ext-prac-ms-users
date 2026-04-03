import { Inject, Injectable } from '@nestjs/common';
import type { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class GetUsersService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute() {
    return this.userRepo.findAll();
  }
}