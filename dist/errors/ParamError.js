"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParamError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = 400;
    }
}
exports.default = ParamError;
