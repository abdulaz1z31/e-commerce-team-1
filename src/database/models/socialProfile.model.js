const socialProfileSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    platform: { type: String, required: true },
    platform_user: { type: String, required: true },
})

export default mongoose.model('SocialProfile', socialProfileSchema)
