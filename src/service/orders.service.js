import { Order } from '../database/models/index.model.js'
export const getAllOrdersService = async () => {
    try {
        const data = await Order.find()
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const getOrderByIdService = async (id) => {
    try {
        const data = await Order.findById(id)
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const createOrderService = async (body) => {
    try {
        const data = await Order.create(body)
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const updateOrderByIdService = async (id, body) => {
    try {
        const data = await Order.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })
        if (!data) {
            throw new Error('Reviews not found or some issues update')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteOrderByIdService = async (id) => {
    try {
        const data = await Order.findByIdAndDelete(id)
        if (!data) {
            throw new Error('Reviews not found or some issues delete')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
