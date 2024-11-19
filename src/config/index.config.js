import { config } from 'dotenv'
config()

export const db = {
    dbUri: process.env.MONGO_URI,
}

export const application = {
    port: process.env.PORT,
}

export const email = {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
}

export const jwtKey = {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    accessTime: process.env.JWT_ACCESS_TIME,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshTime: process.env.JWT_REFRESH_TIME,
}
