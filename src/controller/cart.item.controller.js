import { createProductSercvice, getAllProductSercvice } from "../service/product.service.js"



export const createCartItemController = async (req, res, next) => {
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

export const getAllCartItemController = async (req, res, next) => {
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

export const getByIdCartItemController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await getByIdCategoriesSercvice(title)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}

export const updateCartItemController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await updateCategoriesSercvice(title)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}

export const deleteCartItemController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await deleteCategoriesSercvice(title)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}
