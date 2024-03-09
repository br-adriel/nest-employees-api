import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];

  getAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) return this.users.filter((user) => user.role === role);
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find((user) => user.id == id);

    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  create(createUserDTO: CreateUserDTO) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDTO,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDTO: UpdateUserDTO) {
    this.users = this.users.map((user) => {
      if (user.id == id) {
        return {
          ...user,
          ...updateUserDTO,
        };
      }
      return user;
    });
    return this.getUser(id);
  }

  delete(id: number) {
    const removedUser = this.getUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
