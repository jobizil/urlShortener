import express from 'express'
import config from 'config'
import routes from './routes/index'

import connect from './utils/database'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = config.get('port')
app.listen(port, async () => {
  routes(app)
  await connect()
  console.log(`listening on port ${port}`)
})
