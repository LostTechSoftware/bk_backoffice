"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_context_1 = __importDefault(require("express-http-context"));
const uuid_1 = require("uuid");
const index_1 = __importDefault(require("@logs/index"));
class Logger {
    async index(app) {
        app.all('*', (req, res, next) => {
            const requestId = req.headers.request_id || (0, uuid_1.v4)();
            req.requestId = requestId;
            express_http_context_1.default.set('requestId', requestId);
            index_1.default.info(`[${req.method}] ${req.path}`);
            index_1.default.info(index_1.default.beautify(req.body));
            return next();
        });
    }
}
exports.default = new Logger();
