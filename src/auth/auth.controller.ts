import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthGuard  as CustomAuthGuard} from './auth.guard';
@Controller('auth')
export class AuthController {
   @Get('google')
   @UseGuards(AuthGuard('google'))
    async googleLogin() {
        console.log("Google login");
        // Initiates the Google OAuth2 login flow
     }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleCallback(@Req() req, @Res() res: Response) {
        res.redirect(`${process.env.FRONTEND_URL}/auth/login` + '?token=' + req.user.jwt);
    }

    @Get('me')
    @UseGuards(CustomAuthGuard)
    getProfile(@Req() req) {
        return req.user;
    }
}