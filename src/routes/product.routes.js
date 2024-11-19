import { Router } from 'express'
import {
    createProductController,
    deleteProductController,
    getAllProductController,
    getByIdProductController,
    updateProductController,
} from '../controller/product.controller.js'

export const cartItemRouter = Router()

cartItemRouter.get('/all', getAllProductController)
cartItemRouter.get('/all/:id', getByIdProductController)
cartItemRouter.post('/create', createProductController)
cartItemRouter.put('/update/:id', updateProductController)
cartItemRouter.delete('/delete/:id', deleteProductController)
