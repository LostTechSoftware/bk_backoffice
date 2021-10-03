"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginSchema = {
    password: {
        isLength: {
            errorMessage: 'Password should be at least 7 chars long',
            options: { min: 7 }
        }
    },
    email: {
        isEmail: {
            bail: true
        }
    }
};
exports.default = LoginSchema;
