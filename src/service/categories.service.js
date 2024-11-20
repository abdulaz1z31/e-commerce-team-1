import { Categories } from '../database/models/index.model.js'

export const createCategoriesSercvice = async (name, data) => {
    try {
        const result = await Categories.findOne({name})
        if (!result) {
            const newCategory = await Categories.create(data)
            return newCategory
        }
        throw new Error('error')
    } catch (error) {
        throw new Error(`error, ${error.message}`)
        
    }
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
        { name},
        data,
    )
    if (!updateCategories) {
        throw new Error('Error...')
    }
    return updateCategories
}

export const deleteCategoriesSercvice = async (name) => {
    const delCategories = await Categories.findOneAndDelete({name })
    if (!delCategories) {
        throw new Error('Error...')
    }
    return delCategories
}
