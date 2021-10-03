"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireEmployeer_1 = __importDefault(require("@middlewares/requireEmployeer"));
const ListReports_1 = __importDefault(require("@controllers/Reports/ListReports"));
const routes = (0, express_1.Router)();
routes.get('/reports', requireEmployeer_1.default.index, ListReports_1.default.index);
exports.default = routes;
