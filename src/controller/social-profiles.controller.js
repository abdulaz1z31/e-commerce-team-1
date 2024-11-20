import {
    getAllSocialProfilesService,
    getSocialProfileByIdService,
    createSocialProfileService,
    updateSocialProfileByIdService,
    deleteSocialProfileByIdService,
} from '../service/index.service.js'
export const getAllSocialProfilesController = async (req, res, next) => {
    try {
        const data = await getAllSocialProfilesService()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const getSocialProfilesByIdController = async (req, res, next) => {
    try {
        const data = await getSocialProfileByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const createSocialProfilesController = async (req, res, next) => {
    try {
        const data = await createSocialProfileService(req.body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const updateSocialProfilesByIdController = async (req, res, next) => {
    try {
        const data = await updateSocialProfileByIdService(
            req.params.id,
            req.body,
        )
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
export const deleteSocialProfilesByIdController = async (req, res, next) => {
    try {
        const data = await deleteSocialProfileByIdService(req.params.id)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
