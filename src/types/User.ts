import Role from './Role';

export default interface User {
  name: string;
  email: string;
  role: Role;
}

export interface UserWithId extends User {
  id: number;
}

export interface UserOptionalProps {
  id?: number;
  name?: string;
  email?: string;
  role?: Role;
}
