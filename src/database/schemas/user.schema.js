import Joi from 'joi'

export const userSchema = Joi.object({
    name: Joi.string().min(3).max(50).optional(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid('user', 'manager', 'admin').default('user'),
    avatar: Joi.string().uri().optional(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    birth_of_date: Joi.date().optional(),
    phone_number: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .optional(),
    is_active: Joi.boolean().default(false),
})
