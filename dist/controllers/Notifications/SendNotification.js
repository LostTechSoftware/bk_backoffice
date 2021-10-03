"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@logs/index"));
const notification_1 = __importDefault(require("@models/notification"));
const ParamError_1 = __importDefault(require("@errors/ParamError"));
class SendNotification {
    async index(req, res) {
        try {
            const { employee, body } = req;
            index_1.default.info(`Employee ${employee.name} sending notification`);
            if (!body.title || !body.body)
                throw new ParamError_1.default('Title and Body is required to send or schedule notification');
            const notification = await notification_1.default.create(Object.assign(Object.assign({}, body), { EmployeeId: employee.id }));
            return res.status(200).json(notification);
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
exports.default = new SendNotification();
