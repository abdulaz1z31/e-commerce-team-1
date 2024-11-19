import { Reviews } from '../database/models/index.model.js'
export const getAllReviewsService = async () => {
    try {
        const data = await Reviews.find()
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const getReviewByIdService = async (id) => {
    try {
        const data = await Reviews.findById(id)
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const createReviewService = async (body) => {
    try {
        const data = await Reviews.create(body)
        if (!data) {
            throw new Error('Reviews not created')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const updateReviewByIdService = async (id, body) => {
    try {
        const data = await Reviews.findByIdAndUpdate(id, body, {
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
export const deleteReviewByIdService = async (id) => {
    try {
        const data = await Reviews.findByIdAndDelete(id)
        if (!data) {
            throw new Error('Reviews not found or some issues delete')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
