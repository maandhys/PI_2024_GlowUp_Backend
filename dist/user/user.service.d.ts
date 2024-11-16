import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findByGoogleId(googleId: string): Promise<User | null>;
    create(googleId: string, email: string, name: string): Promise<User>;
}
