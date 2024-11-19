import { config } from 'dotenv'
config()

export const db = {
    dbUri: process.env.MONGO_URI,
}

export const application = {
    port: process.env.PORT,
}
