import mongoose, { Document } from 'mongoose'
import { ShortUrl } from './url.model'

interface Analytics extends Document {
  shortUrl: ShortUrl
}

const AnalyticsSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shortUrl',
      required: true,
    },
  },
  { timestamps: true }
)

const Analytics = mongoose.model<Analytics>('analytics', AnalyticsSchema)

export default Analytics
