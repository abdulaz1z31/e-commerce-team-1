import {
    getAllReviewsService,
    getReviewByIdService,
    createReviewService,
    updateReviewByIdService,
    deleteReviewByIdService,
} from '../service/index.service.js'
export const getAllReviewsController = async (req, res, next) => {
    try {
        const data = await getAllReviewsService()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const getReviewByIdController = async (req, res, next) => {
    try {
        const data = await getReviewByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const createReviewController = async (req, res, next) => {
    try {
        const data = await createReviewService(req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const updateReviewByIdController = async (req, res, next) => {
    try {
        const data = await updateReviewByIdService(req.params.id, req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const deleteReviewByIdController = async (req, res, next) => {
    try {
        const data = await deleteReviewByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
