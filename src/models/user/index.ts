import { Schema, model } from 'mongoose'
import UserInterface from '@interfaces/models/UserInterface'
import block from './instanceFunctions/block'
import getproperties from './properties'

const UserSchema = new Schema(
  getproperties(),
  {
    timestamps: true
  }
)

UserSchema.methods.block = block

export default model<UserInterface>('User', UserSchema)
