import mongoose from 'mongoose'
const wishlistSchema = new mongoose.Schema(
    {
        user_id: {
            type: Number,
            ref: 'User',
            required: true,
        },
        product_id: {
            type: Number,
            ref: 'Product',
            required: true,
        },
    },
    { timestamps: true },
)
export default mongoose.model('Wishlist', wishlistSchema)
