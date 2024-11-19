import mongoose from 'mongoose'
import { hash, genSalt, compare } from 'bcrypt'
const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: ['user', 'manager', 'admin'],
            default: 'user',
        },
        avatar: { type: String },
        username: { type: String, unique: true, required: true },
        birth_of_date: { type: Date },
        phone_number: { type: String },
        is_active: { type: Boolean, default: false },
    },
    { timestamps: true },
)
userSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    const salt = await genSalt(10)
    const hashPassword = await hash(this.password, salt)
    this.password = hashPassword
})

userSchema.method('compare', async function (userPassword) {
    return await compare(userPassword, this.password)
})

export const User = mongoose.model('User', userSchema)
