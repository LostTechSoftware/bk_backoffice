"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const getproperties = () => {
    return {
        EmployeeId: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Row'
        },
        UserId: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User'
        },
        RestaurantId: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Restaurant'
        },
        StoryId: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Story'
        },
        reason: String,
        status: {
            type: String,
            enum: ['waiting_revision', 'in_revision', 'revised'],
            default: 'waiting_revision'
        }
    };
};
exports.default = getproperties;
