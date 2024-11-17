import { Schema, Document } from 'mongoose';
export declare const Userchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: NativeDate;
    name?: string;
    googleId?: string;
    email?: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    name?: string;
    googleId?: string;
    email?: string;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    name?: string;
    googleId?: string;
    email?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface User extends Document {
    googleId: string;
    email: string;
    name: string;
    createdAt: Date;
}
