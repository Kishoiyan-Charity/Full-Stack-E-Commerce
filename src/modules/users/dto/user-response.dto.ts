//DTO

import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UserResponseDto {
  @ApiProperty({
    description: 'User ID',
    example: '123e456-re89b-12de3-a456-4266147400',
  })
  id: string;

  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Kishoyan',
    nullable: true,
  })
  firstName: string | null;

  @ApiProperty({
    description: 'User last name',
    example: 'Charity',
    nullable: true,
  })
  lastName: string | null;

  @ApiProperty({
    description: 'User role',
    enum: Role,
  })
  role: Role;

  @ApiProperty({
    description: 'Account creation date',
    example: '2026-10-01T12:34:56:789Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last modification date',
    example: '2026-10-01T12:34:56:789Z',
  })
  updatedAt: Date;
}
