import { Router } from 'express'
import {
    createProductController,
    deleteProductController,
    getAllProductController,
    getByIdProductController,
    updateProductController,
} from '../controller/index.controller.js'

export const productRoutes = Router()

productRoutes.get('/all', getAllProductController)
productRoutes.get('/all/:id', getByIdProductController)
productRoutes.post('/create', createProductController)
productRoutes.put('/update/:id', updateProductController)
productRoutes.delete('/delete/:id', deleteProductController)
