import { Schema, Document } from 'mongoose';

export const Userchema = new Schema({
  googleId: { type: String, unique: true },
  email: { type: String, unique: true },
  name: String,
  createdAt: { type: Date, default: Date.now }
});

export interface User extends Document {
  googleId: string;
  email: string;
  name: string;
  createdAt: Date;
}
