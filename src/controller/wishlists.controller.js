import {
    getAllWishlistsService,
    getWishlistByIdService,
    createWishlistService,
    updateWishlistByIdService,
    deleteWishlistByIdService,
} from '../service/index.service.js'
export const getAllWishlistsController = async (req, res, next) => {
    try {
        const data = await getAllWishlistsService()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const getWishlistByIdController = async (req, res, next) => {
    try {
        const data = await getWishlistByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const createWishlistController = async (req, res, next) => {
    try {
        const data = await createWishlistService(req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const updateWishlistByIdController = async (req, res, next) => {
    try {
        const data = await updateWishlistByIdService(req.params.id, req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const deleteWishlistByIdController = async (req, res, next) => {
    try {
        const data = await deleteWishlistByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
