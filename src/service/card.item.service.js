import { CardItem } from '../database/models/index.model.js'

export const createCartItemSercvice = async (id, data) => {
    const result = await CardItem.findOne({ id: id }, data)
    if (!result) {
        const newCart = CardItem.create(data)
        return newCart
    }
    throw new Error('error')
}

export const getAllCartItemSercvice = async () => {
    const allData = await CardItem.find()
    if (!allData) {
        throw new Error('Error...')
    }
    return allData
}

export const getByIdCartItemSercvice = async (id) => {
    const result = await CardItem.findOne({ id: id })
    if (!result) {
        throw new Error('Error...')
    }
    return result
}

export const updateCartItemSercvice = async (id, data) => {
    const updateCart = await CardItem.findOneAndUpdate(
        { id: id },
        data,
    )
    if (!updateCart) {
        throw new Error('Error...')
    }
    return updateCart
}

export const deleteCartItemSercvice = async (id) => {
    const delCategories = await CardItem.findOneAndDelete({ id: id })
    if (!delCategories) {
        throw new Error('Error...')
    }
    return delCategories
}
