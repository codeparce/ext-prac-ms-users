import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty({ message: 'El campo email es requerido' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo password es requerido' })
  password: string;
}
