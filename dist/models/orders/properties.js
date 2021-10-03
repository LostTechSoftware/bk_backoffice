"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const mongoose_1 = __importDefault(require("mongoose"));
const getproperties = () => {
    return {
        UserId: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User'
        },
        user: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User'
        },
        RestaurantId: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Restaurant'
        },
        status: {
            type: String,
            enum: ['waiting_approve', 'approved', 'in_progress', 'delivering', 'completed', 'canceled'],
            default: 'waiting_approve'
        },
        reason: String,
        token: {
            type: String,
            default: crypto_1.default.randomInt(111111, 999999)
        },
        paymentMethod: {
            type: String,
            enum: ['card', 'cash', 'online'],
            default: 'cash'
        },
        price: {
            type: Number,
            default: 0
        },
        change: {
            type: Number,
            default: 0
        },
        CouponId: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Coupon'
        },
        removeOption: {
            type: Boolean,
            default: false
        },
        realPrice: {
            type: Number,
            default: 0
        },
        expiresIn: {
            type: Date,
            default: new Date().setMinutes(new Date().getMinutes() + 5)
        },
        ChargeId: String,
        IP: String,
        couponUsed: Number,
        DeliveriedAt: Date
    };
};
exports.default = getproperties;
