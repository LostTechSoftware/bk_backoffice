"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_context_1 = __importDefault(require("express-http-context"));
const getRequestId = () => {
    return express_http_context_1.default.get('requestId');
};
exports.default = getRequestId;
