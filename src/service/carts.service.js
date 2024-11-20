import { Carts } from '../database/models/index.model.js'
export const getAllCartsService = async () => {
    try {
        const allData = await Carts.find()
        if (!allData) {
            throw new Error('Carts not found')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
export const getByIdCartsService = async (id) => {
    try {
        const allData = await Carts.findById(id)
        if (!allData) {
            throw new Error('Carts not found')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
export const createCartsService = async (body) => {
    try {
        
        const allData = await Carts.create(body);
        return allData;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateCartByIdService = async (id, body) => {
    try {
        const allData = await Carts.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })
        if (!allData) {
            throw new Error('Carts not found or some issues on update')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteCartByIdService = async (id) => {
    try {
        const allData = await Carts.findByIdAndDelete(id)
        if (!allData) {
            throw new Error('Carts not found or some issues on delete')
        }
        return allData
    } catch (error) {
        throw new Error(error)
    }
}
