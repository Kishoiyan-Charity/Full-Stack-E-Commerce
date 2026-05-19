import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({
    description: 'Access token authentication',
    example:
      'eeyydgskspeuyebdnclodieye678GDKSLIV70SDV3Gsujjdleoevddcccdkdcdhdcjhdjd67638h03yy3dhjd993g640RUGRFudkne6630',
  })
  accessToken: string;

  @ApiProperty({
    description: 'Access token for obtaining new access token',
    example:
      'eeyydgskspeuyebdnclodieye678GDKSbcldbc000dvLIV70SDV3Gsujjdleoevddcccdkdcdhdcjhdjd67638h03yy3dhjd993g640RUGRFudkne6630',
  })
  refreshToken: string;

  @ApiProperty({
    description: 'Authenticated user information',
    example: {
      id: 'user-123',
      email: '<Email>',
      firstname: '<Kishoyan>',
      lastname: '<Charity>',
      role: 'USER',
    },
  })
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: Role;
  };
}
