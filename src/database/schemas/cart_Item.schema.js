export const cardSchema = Joi.object({
    cart_id: Joi.string().hex().length(24).required(),
    product_id: Joi.string().hex().length(24).required(),
    // hex() nima vazifa bajaradi ustoz?
    title: Joi.string().max(100),
    quantity: Joi.number().required(),
    created_at: Joi.date().default(Date.now)
});

