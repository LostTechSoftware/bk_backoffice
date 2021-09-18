import { Document } from 'mongoose'

interface EmployeerInterface extends Document {
  name: string
  email: string
  password: string
  twoFactorCode: number
  attemptCount: number
  bloqued: boolean
  ipIsCreated: string
}

export default EmployeerInterface
