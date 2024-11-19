import Joi from 'joi'
export const socialProfileSchema = Joi.object({
    user_id: Joi.string().hex().length(24).required(),
    platform: Joi.string().max(50).required(),
    platform_user: Joi.string().max(100).required(),
})

