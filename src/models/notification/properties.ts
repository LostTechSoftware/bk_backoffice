/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'

interface Return {
  title: StringConstructor;
  body: StringConstructor;
  schedule: {
    type: DateConstructor,
    default: any
  };
  tokens: [];
  receivers: {
    type: NumberConstructor;
    default: 0
  };
  clicks: {
    type: NumberConstructor,
    default: 0
  };
  sended: {
    type: BooleanConstructor,
    default: false
  };
  EmployeeId: {
    type: any,
    ref: 'Row'
  };
}

const getproperties = (): Return => {
  return {
    title: String,
    body: String,
    receivers: {
      type: Number,
      default: 0
    },
    clicks: {
      type: Number,
      default: 0
    },
    schedule: {
      type: Date,
      default: new Date()
    },
    tokens: [],
    sended: {
      type: Boolean,
      default: false
    },
    EmployeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Row'
    }
  }
}

export default getproperties
