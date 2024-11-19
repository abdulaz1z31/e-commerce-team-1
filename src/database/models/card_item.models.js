import mongoose, { Schema } from 'mongoose'

const cardItem = new Schema(
    {
        cart_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
            required: true,
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
        },
    },
    {
        required: true,
    },
)

export const CardItem = mongoose.model('CardItem', cardItem)
