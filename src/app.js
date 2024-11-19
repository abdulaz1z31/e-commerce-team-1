import express from 'express'
import morgan from 'morgan'
import {
    authRouter,
    userRouter,
    cartsRouter,
    wishlistsRouter,
    reviewsRouter,
    categoriesRoutes,
    productRoutes,
    cartItemRouter
} from './routes/index.routes.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/wishlist', wishlistsRouter)
app.use('/reviews', reviewsRouter)
app.use('/carts', cartsRouter)
app.use('/categories', categoriesRoutes)
app.use('/product',  productRoutes)
app.use('/carts', cartItemRouter)
app.use((req, res) => {
    return res.status(404).send('NOT FOUND')
})

app.use((error, req, res, next) => {
    if (error) {
        return res.status(500).send(error)
    }
})
