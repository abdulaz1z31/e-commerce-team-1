import { Router } from 'express'
import {
    createReviewController,
    deleteReviewByIdController,
    getAllReviewsController,
    getReviewByIdController,
    updateReviewByIdController,
} from '../controller/index.controller.js'
export const reviewsRouter = Router()
reviewsRouter.get('/', getAllReviewsController)
reviewsRouter.get('/:id', getReviewByIdController)
reviewsRouter.post('/', createReviewController)
reviewsRouter.put('/:id', updateReviewByIdController)
reviewsRouter.delete('/:id', deleteReviewByIdController)
