import { Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  name?: string
  emailFormated(): string
}

export default UserInterface
