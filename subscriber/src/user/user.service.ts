import { Injectable } from '@nestjs/common';
import * as Models from '../models/index';

@Injectable()
export class UserService {
  async register(
    username: string,
    password: string,
    name: string,
    lastName: string,
  ): Promise<Models.User> {
    const user = await Models.User.findOne({ where: { username } });
    if (user) {
      throw 'Username already exists';
    }
    return await Models.User.create({ username, password, name, lastName });
  }

  async login(username: string, password: string): Promise<Models.User | null> {
    return await Models.User.findOne({ where: { username, password } });
  }
}
