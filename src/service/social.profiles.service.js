import { SocialProfile } from '../database/models/index.model.js'
export const getAllSocialProfilesService = async () => {
    try {
        const data = await SocialProfile.find()
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const getSocialProfileByIdService = async (id) => {
    try {
        const data = await SocialProfile.findById(id)
        if (!data) {
            throw new Error('Reviews not found')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const createSocialProfileService = async (body) => {
    try {
        const data = await SocialProfile.create(body)
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const updateSocialProfileByIdService = async (id, body) => {
    try {
        const data = await SocialProfile.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })
        if (!data) {
            throw new Error('Reviews not found or some issues update')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteSocialProfileByIdService = async (id) => {
    try {
        const data = await SocialProfile.findByIdAndDelete(id)
        if (!data) {
            throw new Error('Reviews not found or some issues delete')
        }
        return data
    } catch (error) {
        throw new Error(error)
    }
}
