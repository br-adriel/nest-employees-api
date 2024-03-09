import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [];
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: {}) {
    return { id, ...user };
  }
}
