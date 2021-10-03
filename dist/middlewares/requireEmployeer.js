"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const employee_1 = __importDefault(require("@models/employee"));
const UnauthorizedError_1 = __importDefault(require("@errors/UnauthorizedError"));
class RequireEmployeer {
    index(req, res, next) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader)
                throw new UnauthorizedError_1.default('Token not provided');
            const parts = authHeader.split(' ');
            if (parts.length !== 2)
                throw new UnauthorizedError_1.default('Token malformated');
            const [scheme, token] = parts;
            if (!/^Bearer$/i.test(scheme))
                throw new UnauthorizedError_1.default('Token malformated');
            const publicKey = fs_1.default.readFileSync('./config/public.key', 'utf8');
            jsonwebtoken_1.default.verify(token, publicKey, { algorithm: 'RS256' }, async (err, decoded) => {
                if (err)
                    throw new UnauthorizedError_1.default('Token invalid');
                const employee = await employee_1.default.findById(decoded.id);
                if (!employee)
                    throw new UnauthorizedError_1.default('Employee not found');
                req.employee = employee;
                return next();
            });
        }
        catch ({ name, message, status }) {
            return res.status(status).json({
                name,
                message
            });
        }
    }
}
exports.default = new RequireEmployeer();
