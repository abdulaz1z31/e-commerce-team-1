import { Categories } from '../database/models/index.model.js'

export const createCategoriesSercvice = async (name, data) => {
    const result = await Categories.findOne({ name: name }, data)
    if (!result) {
        const newCategory = Categories.create(data)
        return newCategory
    }
    throw new Error('error')
}

export const getAllCategoriesSercvice = async () => {
    const allData = await Categories.find()
    if (!allData) {
        throw new Error('Error...')
    }
    return allData
}

export const getByIdCategoriesSercvice = async (name) => {
    const result = await Categories.findOne({ name: name })
    if (!result) {
        throw new Error('Error...')
    }
    return result
}

export const updateCategoriesSercvice = async (name, data) => {
    const updateCategories = await Categories.findOneAndUpdate(
        { name: name },
        data,
    )
    if (!updateCategories) {
        throw new Error('Error...')
    }
    return updateCategories
}

export const deleteCategoriesSercvice = async (name) => {
    const delCategories = await Categories.findOneAndDelete({name:name})
    if (!delCategories) {
        throw new Error('Error...')
    }
    return delCategories
}
