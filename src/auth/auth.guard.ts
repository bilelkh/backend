import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        if (token) {
            try {
                const decoded = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
                request.user = decoded;
                return true;
            } catch (error) {
               throw new UnauthorizedException('Invalid token');
            }
        }
        throw new ForbiddenException("You don't have permission to access this resource.")
    }
}