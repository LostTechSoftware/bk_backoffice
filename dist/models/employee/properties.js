"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getproperties = () => {
    return {
        name: String,
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            select: false
        },
        twoFactorCode: {
            type: Number
        },
        attemptCount: {
            type: Number,
            default: 0
        },
        bloqued: {
            type: Boolean,
            default: false
        },
        ipIsCreated: String
    };
};
exports.default = getproperties;
