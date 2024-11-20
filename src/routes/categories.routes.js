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
categoriesRoutes.get('/all/:name', getByIdCategoriesController)
categoriesRoutes.post('/create', createCategoriesController)
categoriesRoutes.put('/update/:name', updateCategoriesController)
categoriesRoutes.delete('/delete/:name', deleteCategoriesController)
