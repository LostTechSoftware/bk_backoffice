import { Schema, model } from 'mongoose'
import BlockCommentInterface from '@interfaces/models/BlockCommentInterface'
import getproperties from './properties'

const BlockCommentsSchema = new Schema(
  getproperties(),
  {
    timestamps: true
  }
)

export default model<BlockCommentInterface>('BlockComment', BlockCommentsSchema)
