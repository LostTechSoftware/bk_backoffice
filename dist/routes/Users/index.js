"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlockUsers_1 = __importDefault(require("@controllers/Users/BlockUsers"));
const requireEmployeer_1 = __importDefault(require("@middlewares/requireEmployeer"));
const ListUsers_1 = __importDefault(require("@controllers/Users/ListUsers"));
const routes = (0, express_1.Router)();
routes.post('/block', requireEmployeer_1.default.index, BlockUsers_1.default.index);
routes.get('/users/:limit?/:offset?', requireEmployeer_1.default.index, ListUsers_1.default.index);
routes.get('/user/:id', requireEmployeer_1.default.index, ListUsers_1.default.index);
exports.default = routes;
