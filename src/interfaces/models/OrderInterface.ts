import { Document } from 'mongoose'

interface OrderInterface extends Document {
  realPrice: number
}

export default OrderInterface
