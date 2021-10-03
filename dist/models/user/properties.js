"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getproperties = () => {
    return {
        name: String,
        email: {
            type: String
        },
        blocked: {
            type: Boolean,
            default: false
        }
    };
};
exports.default = getproperties;
