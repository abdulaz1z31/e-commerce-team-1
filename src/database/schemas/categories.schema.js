export const addressSchema = Joi.object({
    name: Joi.string().max(100),
    description: Joi.string().max(50).required(),
    tag: Joi.string().max(50).required(),
    created_at: Joi.date().default(Date.now)
});

