import { Router } from 'express'
import {
    createCartItemController,
    deleteCartItemController,
    getAllCartItemController,
    getByIdCartItemController,
    updateCartItemController,
} from '../controller/index.controller.js'

export const cartItemRouter = Router()

cartItemRouter.get('/all', getAllCartItemController)
cartItemRouter.get('/all/:id', getByIdCartItemController)
cartItemRouter.post('/create', createCartItemController)
cartItemRouter.put('/update/:id', updateCartItemController)
cartItemRouter.delete('/delete/:id', deleteCartItemController)
