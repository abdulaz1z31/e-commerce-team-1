import mongoose from 'mongoose'
const socialProfileSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    platform: { type: String, required: true },
    platform_user: { type: String, required: true },
})

export const SocialProfile = mongoose.model(
    'SocialProfile',
    socialProfileSchema,
)
