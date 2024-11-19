import {
    createCartItemSercvice,
    deleteCartItemSercvice,
    getAllCartItemSercvice,
    getByIdCartItemSercvice,
    updateCartItemSercvice,
} from '../service/card.item.service.js'

export const createCartItemController = async (req, res, next) => {
    try {
        const title = req.params.title
        const result = await createCartItemSercvice(title, req.body)
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
        const data = await getAllCartItemSercvice()
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
        const result = await getByIdCartItemSercvice(title)
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
        const result = await updateCartItemSercvice(title)
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
        const result = await deleteCartItemSercvice(title)
        if (!result) {
            return res.status(400).send('NOT FOUND')
        }
        return res.status(200).send({ result: result })
    } catch (error) {
        next(error)
    }
}
