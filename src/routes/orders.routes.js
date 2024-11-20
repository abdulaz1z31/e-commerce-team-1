import { Router } from 'express'
import {
    getAllOrdersController,
    getOrderByIdController,
    createOrderController,
    updateOrderByIdController,
    deleteOrderByIdController,
} from '../controller/index.controller.js'
export const ordersRouter = Router()
ordersRouter.get('/', getAllOrdersController)
ordersRouter.get('/:id', getOrderByIdController)
ordersRouter.post('/', createOrderController)
ordersRouter.put('/:id',updateOrderByIdController)
ordersRouter.delete('/:id',deleteOrderByIdController )
