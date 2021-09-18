import { Schema, model } from 'mongoose'
import OrderInterface from '@interfaces/models/OrderInterface'
import getproperties from './properties'

const OrderSchema = new Schema(
  getproperties(),
  {
    timestamps: true
  }
)

export default model<OrderInterface>('Order', OrderSchema)
