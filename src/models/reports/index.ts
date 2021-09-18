import { Schema, model } from 'mongoose'
import ReportInterface from '@interfaces/models/ReportInterface'
import getproperties from './properties'

const ReportsSchema = new Schema(
  getproperties(),
  {
    timestamps: true
  }
)

export default model<ReportInterface>('Report', ReportsSchema)
