import { Router } from 'express'
import {
    getAllCartsController,
    getCartByIdController,
    createCartController,
    updateCartByIdController,
    deleteCartByIdController,
} from '../controller/index.controller.js'
export const cartsRouter = Router()
cartsRouter.get('/', getAllCartsController)
cartsRouter.get('/:id', getCartByIdController)
cartsRouter.post('/', createCartController)
cartsRouter.put('/:id', updateCartByIdController)
cartsRouter.delete('/:id', deleteCartByIdController)
