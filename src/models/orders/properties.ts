/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto'
import mongoose from 'mongoose'

interface Return {
    UserId: {
      type: any,
      ref: 'User'
    };
    user: {
      type: any,
      ref: 'User'
    };
    RestaurantId: {
      type: any,
      ref: 'Restaurant'
    };
    status: {
      type: StringConstructor,
      enum: ['waiting_approve', 'approved', 'in_progress', 'delivering', 'completed', 'canceled'],
      default: 'waiting_approve'
    };
    reason: StringConstructor;
    token: {
      type: StringConstructor,
      default: number
    };
    paymentMethod: {
      type: StringConstructor,
      enum: ['card', 'cash', 'online'],
      default: 'cash'
    };
    price: {
      type: NumberConstructor,
      default: 0
    };
    change: {
      type: NumberConstructor,
      default: 0
    };
    CouponId: {
      type: any,
      ref: 'Coupon'
    };
    removeOption: {
      type: BooleanConstructor,
      default: false
    };
    realPrice: {
      type: NumberConstructor,
      default: 0
    };
    expiresIn: {
      type: DateConstructor,
      default: number
    };
    ChargeId: StringConstructor
    IP: StringConstructor
    couponUsed: NumberConstructor
    DeliveriedAt: DateConstructor
}

const getproperties = (): Return => {
  return {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    RestaurantId: {
      type: mongoose.Schema.Types.ObjectId,
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
      default: crypto.randomInt(111111, 999999)
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
      type: mongoose.Schema.Types.ObjectId,
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
  }
}

export default getproperties
