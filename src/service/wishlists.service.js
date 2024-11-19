import { Wishlists } from '../database/models/index.model.js'
export const getAllWishlistsService = async () => {
    try {
        const allData = await Wishlists.find()
        if (!allData) {
            throw new Error('Wishlists not found')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
export const getWishlistByIdService = async (id) => {
    try {
        const allData = await Wishlists.findById(id)
        if (!allData) {
            throw new Error('Wishlists not found')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
export const createWishlistService = async (body) => {
    try {
        const allData = await Wishlists.create(body)
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
export const updateWishlistByIdService = async (id, body) => {
    try {
        const allData = await Wishlists.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })
        if (!allData) {
            throw new Error('Wishlists not found or some issues on update')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteWishlistByIdService = async (id) => {
    try {
        const allData = await Wishlists.findByIdAndDelete(id)
        if (!allData) {
            throw new Error('Wishlists not found or some issues on delete')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
