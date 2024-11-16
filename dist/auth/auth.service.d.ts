import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly UserService;
    constructor(UserService: UserService);
    validateUserByGoogleId(googleId: string): Promise<import("../user/user.schema").User>;
}
