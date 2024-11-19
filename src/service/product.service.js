import { Product } from '../database/models/index.model.js'

export const createProductSercvice = async (title, data) => {
    const result = await Product.findOne({ title: title })
    if (!result) {
        const newCategory = Product.create(data)
        return newCategory
    }
    throw new Error('error')
}

export const getAllProductSercvice = async () => {
    const allData = await Product.find()
    if (!allData) {
        throw new Error('Error...')
    }
    return allData
}

export const getByIdProductSercvice = async (title) => {
    const result = await Product.findOne({ title: title })
    if (!result) {
        throw new Error('Error...')
    }
    return result
}

export const updateProductSercvice = async (title, data) => {
    const updateCategories = await Product.findOneAndUpdate(
        { title: title },
        data,
    )
    if (!updateCategories) {
        throw new Error('Error...')
    }
    return updateCategories
}

export const deleteProductSercvice = async (title) => {
    const delCategories = await Product.findOneAndDelete({title:title})
    if (!delCategories) {
        throw new Error('Error...')
    }
    return delCategories
}
