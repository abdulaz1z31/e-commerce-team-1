import { Router } from 'express'
import {
    createCategoriesController,
    deleteCategoriesController,
    getAllCategoriesController,
    getByIdCategoriesController,
    updateCategoriesController,
} from '../controller/index.controller.js'

export const categoriesRoutes = Router()

categoriesRoutes.get('/all', getAllCategoriesController)
categoriesRoutes.get('/all/:id', getByIdCategoriesController)
categoriesRoutes.post('/create', createCategoriesController)
categoriesRoutes.put('/update/:id', updateCategoriesController)
categoriesRoutes.delete('/delete/:id', deleteCategoriesController)
