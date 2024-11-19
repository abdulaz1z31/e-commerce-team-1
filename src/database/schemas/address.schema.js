const addressSchema = Joi.object({
    user_id: Joi.string().hex().length(24).required(),
    title: Joi.string().max(100),
    address_line_1: Joi.string().required(),
    address_line_2: Joi.string(),
    country: Joi.string().max(50).required(),
    city: Joi.string().max(50).required(),
    postal_code: Joi.string().max(20),
    phone_number: Joi.string().pattern(/^[0-9]{10,15}$/),
    created_at: Joi.date().default(Date.now)
});

export default addressSchema;
