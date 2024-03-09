import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: '"name" deve ser uma string' })
  @IsNotEmpty({ message: '"name" deve ser preenchido' })
  name: string;

  @IsEmail({}, { message: '"email" deve ser um email válido' })
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: '"role" inválido' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
