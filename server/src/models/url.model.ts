import mongoose, { Document, Schema } from 'mongoose'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 5)

export interface ShortUrl extends Document {
  shortId: string
  destination: string
}

const UrlSchema = new mongoose.Schema({
  shortId: {
    type: 'string',
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
})

export default mongoose.model<ShortUrl>('ShortURL', UrlSchema)
