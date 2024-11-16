"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userchema = void 0;
const mongoose_1 = require("mongoose");
exports.Userchema = new mongoose_1.Schema({
    googleId: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
    createdAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=user.schema.js.map