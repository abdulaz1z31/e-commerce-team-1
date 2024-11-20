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
productRoutes.get('/all/:title', getByIdProductController)
productRoutes.post('/create', createProductController)
productRoutes.put('/update/:title', updateProductController)
productRoutes.delete('/delete/:title', deleteProductController)
