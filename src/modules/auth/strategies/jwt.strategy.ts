import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PrismaService } from '../../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
// import { ConfigService } from '';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}
}
