import { Router } from 'express'
import {
    createCategoriesController,
    deleteCategoriesController,
    getAllCategoriesController,
    getByIdCategoriesController,
    updateCategoriesController,
} from '../controller/categories.controller'

export const cartItemRouter = Router()

cartItemRouter.get('/all', getAllCategoriesController)
cartItemRouter.get('/all/:id', getByIdCategoriesController)
cartItemRouter.post('/create', createCategoriesController)
cartItemRouter.put('/update/:id', updateCategoriesController)
cartItemRouter.delete('/delete/:id', deleteCategoriesController)
