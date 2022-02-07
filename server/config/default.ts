import dotenv from 'dotenv'
dotenv.config()

export default {
  port: 2230,
  dbUri: process.env.DB_URI,
}
