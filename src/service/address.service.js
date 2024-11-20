import { Address } from '../database/models/index.model.js'
export const getAllAddressesService = async () => {
    try {
        const data = await Address.find()
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const getAddressByIdService = async (id) => {
    try {
        const data = await Address.findById(id)
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const createAddressService = async (body) => {
    try {
        const data = await Address.create(body)
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const updateAddressByIdService = async (id, body) => {
    try {
        const data = await Address.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })
        if (!data) {
            throw new Error('Reviews not found or some issues update')
        }SocialProfi
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteAddressByIdService = async (id) => {
    try {
        const data = await Address.findByIdAndDelete(id)
        if (!data) {
            throw new Error('Reviews not found or some issues delete')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
