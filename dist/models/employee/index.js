"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = require("mongoose");
const properties_1 = __importDefault(require("./properties"));
const EmployeerSchema = new mongoose_1.Schema((0, properties_1.default)(), {
    timestamps: true
});
EmployeerSchema.pre('save', async function hashPassword(next) {
    if (!this.isModified('password'))
        return next();
    this.password = await bcryptjs_1.default.hash(this.password, 8);
});
exports.default = (0, mongoose_1.model)('Employeer', EmployeerSchema);
