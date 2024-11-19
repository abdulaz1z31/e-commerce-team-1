import mongoose from 'mongoose'
const cartScheme = new mongoose.Schema(
    {
        user_id: {
            type: Number,
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
export default mongoose.model('Cart', cartScheme)
