import { UserService } from '../user/user.service';
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly UserService;
    constructor(UserService: UserService);
    validate(accessToken: string, refreshToken: string, profile: any): Promise<import("../user/user.schema").User>;
}
export {};
