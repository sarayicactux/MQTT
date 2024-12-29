import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { UserInterface, LoginInterface } from '../interfaces/user.interface';
import ResultInterface from '../interfaces/result.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('register_user')
  async registerUser(user: UserInterface): Promise<ResultInterface> {
    const { username, password, name, lastName } = user;
    try {
      const newUser = await this.userService.register(
        username,
        password,
        name,
        lastName,
      );
      return { status: 200, data: newUser };
    } catch (error) {
      return { status: 400, error };
    }
  }

  @MessagePattern('login_user')
  async loginUser(loginInterface: LoginInterface): Promise<ResultInterface> {
    const { username, password } = loginInterface;
    const user = await this.userService.login(username, password);
    if (!user) {
      return { status: 403, error: 'Invalid credentials', data: null };
    }
    return { status: 200, data: user };
  }
}
