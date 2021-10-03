"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@logs/index"));
const notification_1 = __importDefault(require("@models/notification"));
class GetNotification {
    async index(req, res) {
        try {
            const { employee } = req;
            index_1.default.info(`Getting all notifications for employee ${employee.name}`);
            const notifications = await notification_1.default.find();
            return res.status(200).json(notifications);
        }
        catch (error) {
            index_1.default.error(error);
            return res.status(error.status || 400).json({
                name: error.name,
                message: error.message
            });
        }
    }
}
exports.default = new GetNotification();
