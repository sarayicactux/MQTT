import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import Result from 'src/interfaces/result.interface';
//DTOs
import {
  UserDto,
  UserLoginDto,
  CreateUserDto,
  userObj,
} from '../../DTO/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('MQTT_PUBLISHER') private readonly MQTTClient: ClientProxy,
  ) {}
  // login ***************************************************
  async login(userLoginDto: UserLoginDto): Promise<UserDto> {
    const result: Result = await this.MQTTClient.send(
      'login_user',
      userLoginDto,
    ).toPromise();
    if (result.status === 200) {
      return userObj(result.data);
    } else {
      throw new HttpException(
        {
          status: result.status,
          error: result.error,
        },
        result.status,
      );
    }
  }
  // register ***************************************************
  async register(createUserDto: CreateUserDto): Promise<UserDto> {
    const result: Result = await this.MQTTClient.send(
      'register_user',
      createUserDto,
    ).toPromise();
    if (result.status === 200) {
      return userObj(result.data);
    } else {
      throw new HttpException(
        {
          status: result.status,
          error: result.error,
        },
        result.status,
      );
    }
  }
}
