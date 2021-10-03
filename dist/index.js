"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("@logs/index"));
const PORT = process.env.PORT || 3003;
app_1.default.listen(PORT);
index_1.default.info(`Running in port ${PORT}`);
