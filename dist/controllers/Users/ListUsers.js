"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@logs/index"));
const user_1 = __importDefault(require("@models/user"));
const reports_1 = __importDefault(require("@models/reports"));
const orders_1 = __importDefault(require("@models/orders"));
class ListUsers {
    async index(req, res) {
        try {
            const { employee, params } = req;
            const { id, limit, offset } = params;
            index_1.default.info(`Getting all users for employee ${employee.name}`);
            const users = id ? await user_1.default.findById(id) : await user_1.default.find().skip(parseFloat(offset) || 0).limit(parseFloat(limit) || 10);
            const details = [];
            if (id) {
                const reducer = (previousValue, currentValue) => previousValue + currentValue;
                const reports = await reports_1.default.find({ UserId: id });
                const orders = await orders_1.default.find({ user: id });
                const prices = orders.map(({ realPrice }) => realPrice);
                const ltv = prices.length ? prices.reduce(reducer) : 0;
                details.push({ reports });
                details.push({ orders });
                details.push({ ltv });
            }
            return res.status(200).json({ error: false, users, details });
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
exports.default = new ListUsers();
