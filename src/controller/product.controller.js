import {
    createProductSercvice,
    deleteProductSercvice,
    getAllProductSercvice,
    getByIdProductSercvice,
    updateProductSercvice,
} from '../service/product.service.js'

export const createProductController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await createProductSercvice(title, req.body)
        res.status(200).send({
            status: 'ok',
            mal: result,
            data: 'Created',
        })
    } catch (error) {
        next(error)
    }
}

export const getAllProductController = async (req, res, next) => {
    try {
        const data = await getAllProductSercvice()
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

export const getByIdProductController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await getByIdProductSercvice(title)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}

export const updateProductController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await updateProductSercvice(title)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}

export const deleteProductController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await deleteProductSercvice(title)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}
