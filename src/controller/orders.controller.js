import {
    getAllOrdersService,
    getOrderByIdService,
    createOrderService,
    updateOrderByIdService,
    deleteOrderByIdService,
} from '../service/index.service.js'
export const getAllOrdersController = async (req, res, next) => {
    try {
        const data = await getAllOrdersService()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const getOrderByIdController = async (req, res, next) => {
    try {
        const data = await getOrderByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const createOrderController = async (req, res, next) => {
    try {
        const data = await createOrderService(req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const updateOrderByIdController = async (req, res, next) => {
    try {
        const data = await updateOrderByIdService(req.params.id, req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const deleteOrderByIdController = async (req, res, next) => {
    try {
        const data = await deleteOrderByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
