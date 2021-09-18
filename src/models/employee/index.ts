import bcrypt from 'bcryptjs'
import { Schema, model } from 'mongoose'
import EmployeerInterface from '@interfaces/models/EmployeerInterface'
import getproperties from './properties'

const EmployeerSchema = new Schema<EmployeerInterface>(
  getproperties(),
  {
    timestamps: true
  }
)

EmployeerSchema.pre('save', async function hashPassword (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 8)
})

export default model<EmployeerInterface>('Employeer', EmployeerSchema)
