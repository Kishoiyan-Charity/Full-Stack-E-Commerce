import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'User email address',
    example: 'kish.yian@gmail.com',
  })
  @IsEmail({}, { message: 'Please provide an email address' })
  @IsNotEmpty({ message: 'Email address is required' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'StrongP@ssw0rd!',
  })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
