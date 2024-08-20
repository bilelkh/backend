import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {  Response } from 'express';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

   @Get('google')
   @UseGuards(AuthGuard('google'))
    async googleLogin() {
        // Initiates the Google OAuth2 login flow
     }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
   async googleCallback(@Req() req, @Res() res: Response) {
        // Handles the Google OAuth2 callback
        const token = await this.authService.handleLogin(req.user);
        res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
    }

    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    getProfile(@Req() req) {
        return req.user;
    }
}