import {
    getAllCartsService,
    getByIdCartsService,
    createCartsService,
    updateCartByIdService,
    deleteCartByIdService,
} from '../service/index.service.js'
export const getAllCartsController = async (req, res, next) => {
    try {
        const data = await getAllCartsService()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const getCartByIdController = async (req, res, next) => {
    try {
        const data = await getByIdCartsService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const createCartController = async (req, res, next) => {
    try {
        const body  = req.body
        const data = await createCartsService(body)
        if (!data) {
            return res.status(404).send('NOT FOUND')
        }
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const updateCartByIdController = async (req, res, next) => {
    try {
        const data = await updateCartByIdService(req.params.id, req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const deleteCartByIdController = async (req, res, next) => {
    try {
        const data = await deleteCartByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
