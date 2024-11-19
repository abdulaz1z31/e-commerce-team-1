import Joi from 'joi'
export const orderSchema = Joi.object({
    user_id: Joi.string().hex().length(24).required(),
    cart_id: Joi.number().integer().required(),
    created_at: Joi.date().default(Date.now),
    updated_at: Joi.date().default(Date.now),
})

