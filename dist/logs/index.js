"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sentry = __importStar(require("@sentry/node"));
const coralogix_logger_1 = require("coralogix-logger");
const getRequestId_1 = __importDefault(require("../getRequestId"));
coralogix_logger_1.CoralogixLogger.configure(new coralogix_logger_1.LoggerConfig({
    applicationName: 'bk-backoffice',
    privateKey: '86807c6a-fd78-6edd-b6e3-9984194170c2',
    subsystemName: process.env.NODE_ENV
}));
const logger = new coralogix_logger_1.CoralogixLogger('Logger');
exports.default = {
    warn: (data) => {
        const text = { data, request_id: (0, getRequestId_1.default)() };
        console.log(text);
        logger.addLog(new coralogix_logger_1.Log({
            severity: coralogix_logger_1.Severity.warning,
            className: 'ConsoleLogger',
            methodName: 'logger',
            text
        }));
    },
    error: (data) => {
        const text = { data, request_id: (0, getRequestId_1.default)() };
        console.log(text);
        logger.addLog(new coralogix_logger_1.Log({
            severity: coralogix_logger_1.Severity.error,
            className: 'ConsoleLogger',
            methodName: 'logger',
            text
        }));
        Sentry.setTag('request_id', (0, getRequestId_1.default)());
        Sentry.captureException(data);
    },
    info: (data) => {
        const text = { data, request_id: (0, getRequestId_1.default)() };
        console.log(text);
        logger.addLog(new coralogix_logger_1.Log({
            severity: coralogix_logger_1.Severity.info,
            className: 'ConsoleLogger',
            methodName: 'logger',
            text
        }));
    },
    beautify: (data) => JSON.stringify(data, undefined, 2)
};
