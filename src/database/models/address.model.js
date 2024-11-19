import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: { type: String },
    created_at: { type: Date, default: Date.now },
    address_line_1: { type: String, required: true },
    address_line_2: { type: String },
    country: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: String },
    phone_number: { type: String },
})

export const Address = mongoose.model('Address', addressSchema)
