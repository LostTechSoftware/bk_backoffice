"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetNotifications_1 = __importDefault(require("@controllers/Notifications/GetNotifications"));
const requireEmployeer_1 = __importDefault(require("@middlewares/requireEmployeer"));
const SendNotification_1 = __importDefault(require("@controllers/Notifications/SendNotification"));
const routes = (0, express_1.Router)();
routes.get('/notifications', requireEmployeer_1.default.index, GetNotifications_1.default.index);
routes.post('/notifications', requireEmployeer_1.default.index, SendNotification_1.default.index);
exports.default = routes;
