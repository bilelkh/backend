import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(profile: any): Promise<any> {
        const user = await this.userModel.findOne({ googleId: profile.id });
        if (!user) {
            const newUser = new this.userModel({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
            });
            return newUser.save();
        }
         return user
    }

    handleLogin(user): string {
        const payload = { email: user.email, sub: user._id };
        return this.jwtService.sign(payload, { secret: process.env.JWT_SECRET });
    }
}
