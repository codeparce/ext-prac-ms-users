import { Inject, Injectable } from '@nestjs/common';
import type{ UserRepository } from '../../domain/repositories/user.repository';
import  { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(id: string, dto: UpdateUserDto) {
    return this.userRepo.update(id, dto);
  }
}