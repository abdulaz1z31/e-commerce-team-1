import mongoose from 'mongoose'
const cartScheme = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
)
export const Carts = mongoose.model('Cart', cartScheme)
