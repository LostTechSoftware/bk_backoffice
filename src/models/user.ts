import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  name?: string
  emailFormated(): string
}

const UserSchema = new Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
)

UserSchema.methods.emailFormated = function (): void {
  console.log(this.id, this.email)
}

export default model<UserInterface>('User', UserSchema)
