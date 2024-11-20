import { Router } from 'express'
import {
    getAllCartsController,
    getCartByIdController,
    createCartController,
    updateCartByIdController,
    deleteCartByIdController,
} from '../controller/index.controller.js'
export const cartsRouter = Router()
cartsRouter.get('/all', getAllCartsController)
cartsRouter.get('/all/:id', getCartByIdController)
cartsRouter.post('/create', createCartController)
cartsRouter.put('/update/:id', updateCartByIdController)
cartsRouter.delete('/delete/:id', deleteCartByIdController)
