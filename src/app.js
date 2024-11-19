import express from 'express'
import morgan from 'morgan'
import { authRouter, userRouter } from './routes/index.routes.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/auth', authRouter)
app.use('/user', userRouter)

app.use((req, res) => {
    return res.status(404).send('NOT FOUND')
})

app.use((error, req, res, next) => {
    if (error) {
        return res.status(500).send(error)
    }
})
