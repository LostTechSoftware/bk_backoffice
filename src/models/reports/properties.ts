/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'

interface Return {
    EmployeeId: {
      type: any,
      ref: 'Row'
    };
    UserId: {
      type: any,
      ref: 'User'
    };
    RestaurantId: {
      type: any,
      ref: 'Restaurant'
    };
    StoryId: {
      type: any,
      ref: 'Story'
    };
    reason: StringConstructor;
    status: {
      type: StringConstructor,
      enum: ['waiting_revision', 'in_revision', 'revised'],
      default: 'waiting_revision'
    };
}

const getproperties = (): Return => {
  return {
    EmployeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Row'
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    RestaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant'
    },
    StoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Story'
    },
    reason: String,
    status: {
      type: String,
      enum: ['waiting_revision', 'in_revision', 'revised'],
      default: 'waiting_revision'
    }
  }
}

export default getproperties
