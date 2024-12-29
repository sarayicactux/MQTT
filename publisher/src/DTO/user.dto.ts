import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

// OBJ *******************

export function userObj(user) {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    lastName: user.lastName,
  };
}

// CLASS *******************

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  password: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  lastName: string;
}

export class UserDto {
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  id: number;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  lastName: string;
}
export class UserLoginDto {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  password: string;
}
