"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParamError_1 = __importDefault(require("@errors/ParamError"));
const block = function () {
    if (this.blocked)
        throw new ParamError_1.default('User already blocked');
    this.blocked = true;
    this.save();
};
exports.default = block;
