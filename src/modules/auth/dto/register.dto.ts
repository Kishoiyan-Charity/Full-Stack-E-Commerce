import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    description: 'User email address',
    example: 'kish.yian@gmail.com',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'StrongP@ssw0rd!',
  })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'Password must be at least one uppercase letter, one lowercase letter, one number and one special case',
  })
  password: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Kishoyan',
    required: false,
  })
  @IsOptional()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Charity',
    required: false,
  })
  @IsOptional()
  @IsString()
  lastName: string;
}
