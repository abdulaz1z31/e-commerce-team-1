import {
    getAllAddressesService,
    getAddressByIdService,
    createAddressService,
    updateAddressByIdService,
    deleteAddressByIdService,
} from '../service/index.service.js'
export const getAllAddressesController = async (req, res, next) => {
    try {
        const data = await getAllAddressesService()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const getAddressByIdController = async (req, res, next) => {
    try {
        const data = await getAddressByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const createAddressController = async (req, res, next) => {
    try {
        const data = await createAddressService(req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const updateAddressByIdController = async (req, res, next) => {
    try {
        const data = await updateAddressByIdService(req.params.id, req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const deleteAddressByIdController = async (req, res, next) => {
    try {
        const data = await deleteAddressByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
