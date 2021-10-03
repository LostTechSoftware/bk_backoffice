"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_http_context_1 = __importDefault(require("express-http-context"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const Notifications_1 = __importDefault(require("@routes/Notifications"));
const Users_1 = __importDefault(require("@routes/Users"));
const Reports_1 = __importDefault(require("@routes/Reports"));
const logs_1 = __importDefault(require("@middlewares/logs"));
const index_1 = __importDefault(require("@logs/index"));
const sentry_1 = __importDefault(require("@services/sentry"));
const consumers_1 = __importDefault(require("@services/consumers"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.database();
        this.setupSentry();
        this.setuplogs();
        this.security();
        this.routes();
        this.setupConsumers();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
        this.express.use(express_http_context_1.default.middleware);
    }
    security() {
        const rateLimiter = (0, express_rate_limit_1.default)({
            windowMs: 1 * 60 * 1000,
            max: 500,
            keyGenerator: (req) => {
                return req.ip;
            },
            handler: (_, res) => {
                res.status(429).send('Limit of requests is hit-in');
            }
        });
        this.express.use(rateLimiter);
        this.express.use((0, helmet_1.default)());
    }
    database() {
        mongoose_1.default.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        index_1.default.info('Database connected');
    }
    setuplogs() {
        logs_1.default.index(this.express);
    }
    setupSentry() {
        (0, sentry_1.default)(this.express);
    }
    setupConsumers() {
        consumers_1.default.backofficeConsumer();
    }
    routes() {
        this.express.use(Notifications_1.default);
        this.express.use(Users_1.default);
        this.express.use(Reports_1.default);
    }
}
exports.default = new App().express;
