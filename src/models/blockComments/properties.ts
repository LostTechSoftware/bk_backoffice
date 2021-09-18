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
    data: StringConstructor;
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
    data: String
  }
}

export default getproperties
