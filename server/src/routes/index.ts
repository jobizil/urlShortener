import { Express, Request, Response } from 'express'
import {
  createUrl,
  redirectUrl,
  fetchAnalytics,
  getShortUrl,
} from '../controllers/url.controller'
import validateRequest from '../middleware/validate'
import urlSchema from '../schema/createUrl.schema'

export default function routeHandler(app: Express) {
  app.get('/status', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Api is up and running.' })
  })

  app.post('/api/url', validateRequest(urlSchema), createUrl)
  app.get('/:shortId', redirectUrl)
  app.get('/api/url/:shortId', getShortUrl)

  app.get('/api/analytics', fetchAnalytics)
}
