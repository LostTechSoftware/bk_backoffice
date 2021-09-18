import { Schema, model } from 'mongoose'
import UserInterface from '@interfaces/models/UserInterface'
import getproperties from './properties'

const NotificationSchema = new Schema(
  getproperties(),
  {
    timestamps: true
  }
)

export default model<UserInterface>('Notification', NotificationSchema)
