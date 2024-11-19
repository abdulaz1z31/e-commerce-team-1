import { Router } from 'express'
import {
    getAllWishlistsController,
    getWishlistByIdController,
    createWishlistController,
    updateWishlistByIdController,
    deleteWishlistByIdController,
} from '../controller/index.controller.js'
export const wishlistsRouter = Router()
wishlistsRouter.get('/', getAllWishlistsController)
wishlistsRouter.get('/:id', getWishlistByIdController)
wishlistsRouter.post('/', createWishlistController)
wishlistsRouter.put('/:id', updateWishlistByIdController)
wishlistsRouter.delete('/:id', deleteWishlistByIdController)
