import {
    createCategoriesSercvice,
    deleteCategoriesSercvice,
    getAllCategoriesSercvice,
    getByIdCategoriesSercvice,
    updateCategoriesSercvice,
} from '../service/categories.service.js'

export const createCategoriesController = async (req, res, next) => {
    try {
        const name = req.body.name
        const result = await createCategoriesSercvice(name, req.body)
        res.status(200).send({
            status: 'ok',
            mal: result,
            data: 'Created',
        })
    } catch (error) {
        next(error)
    }
}

export const getAllCategoriesController = async (req, res, next) => {
    try {
        const data = await getAllCategoriesSercvice()
        if (!data) {
            return res.status(404).send('Not found!!!')
        }
        return res.status(200).send({
            status: 'ok',
            data: data,
        })
    } catch (error) {
        next(error)
    }
}

export const getByIdCategoriesController = async (req, res, next) => {
    try {
        const name = req.params.name
        const result = await getByIdCategoriesSercvice(name)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}

export const updateCategoriesController = async (req, res, next) => {
    try {
        const name = req.params.name
        const result = await updateCategoriesSercvice(name)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}

export const deleteCategoriesController = async (req, res, next) => {
    try {
        const name = req.params.name
        const result = await deleteCategoriesSercvice(name)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}
