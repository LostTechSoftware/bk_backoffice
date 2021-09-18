import { Document } from 'mongoose'

interface UserInterface extends Document {
  email: string
  name: string
  blocked: boolean
  block(): void
}

export default UserInterface
