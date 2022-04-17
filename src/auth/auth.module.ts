import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [
    AuthService,
    JwtModule
  ],
  imports: [
    forwardRef(() => UsersModule),
    // UsersModule,
    JwtModule.register({
      secret: 'mySecretKey',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ]
})
export class AuthModule {}
