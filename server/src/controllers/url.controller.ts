import { Request, Response } from 'express'
import Analytics from '../models/analytics.model'

import ShortURL from '../models/url.model'

export async function createUrl(req: Request, res: Response) {
  const { destination } = req.body

  const newUrl = new ShortURL({ destination })
  await newUrl.save()

  return res.send(newUrl)
}

export async function redirectUrl(req: Request, res: Response) {
  const { shortId } = req.params
  const destination = await ShortURL.findOne({ shortId })
  if (!destination) return res.sendStatus(404)
  await Analytics.create({ shortUrl: destination._id })

  return res.status(200).redirect(destination.destination)
}

export async function fetchAnalytics(req: Request, res: Response) {
  const data = await Analytics.find().lean()

  return res.send(data)
}

export async function getShortUrl(req: Request, res: Response) {
  const { shortId } = req.params
  const short = await ShortURL.findOne({ shortId }).lean()

  if (!short) {
    return res.sendStatus(404)
  }

  return res.json(short)
}
