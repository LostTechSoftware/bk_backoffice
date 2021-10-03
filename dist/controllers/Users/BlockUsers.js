"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@logs/index"));
const user_1 = __importDefault(require("@models/user"));
const blockComments_1 = __importDefault(require("@models/blockComments"));
const NotFoundError_1 = __importDefault(require("@errors/NotFoundError"));
class BlockUsers {
    async index(req, res) {
        try {
            const { body, employee } = req;
            const { UserId, comment } = body;
            const { id: EmployeeId } = employee;
            if (!UserId || !comment)
                throw new NotFoundError_1.default('Comment and UserId is required');
            index_1.default.info(`[BlockUsers] Employee: ${EmployeeId} UserId: ${UserId}`);
            if (['object'].includes(typeof UserId)) {
                for (const id of UserId) {
                    const userToBlock = await user_1.default.findById(id);
                    if (!userToBlock)
                        throw new NotFoundError_1.default('User not found');
                    await userToBlock.block();
                    await blockComments_1.default.create({ data: comment, EmployeeId, UserId: id });
                }
            }
            else {
                const userToBlock = await user_1.default.findById(UserId);
                if (!userToBlock)
                    throw new NotFoundError_1.default('User not found');
                await userToBlock.block();
                await blockComments_1.default.create({ data: comment, EmployeeId, UserId });
            }
            return res.status(200).json({ error: false, message: `User ${UserId} is blocked with successful` });
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
exports.default = new BlockUsers();
