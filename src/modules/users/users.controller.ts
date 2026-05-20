import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { UsersService } from './users.service';
import { UserResponseDto } from './dto/user-response.dto';
import type { RequestWithUser } from '../../common/interfaces/request-with-user.interface';
import { Req } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Users')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Get current user profile
  @Get('me')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    description: 'Get current user profile',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getProfile(@Req() req: RequestWithUser): Promise<UserResponseDto> {
    return await this.usersService.findOne(req.user.id);
  }

  // Get all users (from admin)
  @Get()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Get all users',
    type: [UserResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAll(): Promise<UserResponseDto[]> {
    return await this.usersService.findAll();
  }

  // Get user by id
  @Get(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({
    status: 200,
    description: 'Get users with rhe specific id',
    type: [UserResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return await this.usersService.findOne(id);
  }

  // Update current user profile
  @Get(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({
    status: 200,
    description: 'Get users with rhe specific id',
    type: [UserResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return await this.usersService.findOne(id);
  }
}
