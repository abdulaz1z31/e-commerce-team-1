import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: ['user', 'manager', 'admin'],
            default: 'user',
        },
        avatar: { type: String },
        username: { type: String, unique: true },
        birth_of_date: { type: Date },
        phone_number: { type: String },
        is_active: { type: Boolean, default: true },
    },
    { timestamps: true },
)

export default mongoose.model('User', userSchema)
