import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../../domain/entities/user.entity';
import type { UserRepository } from '../../domain/repositories/user.repository';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CreateUserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = User.create(dto.name, dto.email, hashedPassword);
    return this.userRepo.save(user);
  }
}