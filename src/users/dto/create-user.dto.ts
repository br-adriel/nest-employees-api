import Role from 'src/types/Role';

export class CreateUserDTO {
  name: string;
  email: string;
  role: Role;
}
