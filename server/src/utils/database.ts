import mongoose from 'mongoose'
import config from 'config'
export default async function connect() {
  const dbUri = config.get<string>('dbUri')
  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log('Connected to db.')
    })
    .catch(err => {
      console.log('Could not connect to db.', err)
      process.exit(1)
    })
}
