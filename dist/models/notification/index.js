"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const properties_1 = __importDefault(require("./properties"));
const NotificationSchema = new mongoose_1.Schema((0, properties_1.default)(), {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Notification', NotificationSchema);
