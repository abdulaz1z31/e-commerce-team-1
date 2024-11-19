import { OTP, User } from '../database/models/index.model.js'
import { otpGenerator, sendMail } from '../helpers/index.helper.js'

export const createUserService = async (userData) => {
    try {
        const { email } = userData

        // Emailni tekshirish
        const currentUser = await User.findOne({ email })
        if (currentUser) {
            throw new Error('Email already exists')
        }

        // Yangi foydalanuvchini yaratish
        const user = new User(userData)
        await user.save()

        // OTP yaratish va yuborish
        const oneTimePassword = otpGenerator()
        await sendMail(email, 'OTP', `This is your OTP: ${oneTimePassword}`)

        // OTPni saqlash
        const db_otp = new OTP({
            user_id: user._id,
            otp_code: oneTimePassword,
        })
        await db_otp.save()

        return { success: true, error: false }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllUsersService = async () => {
    try {
        const users = await User.find()
        return { success: true, error: false, users }
    } catch (error) {
        return { success: false, error }
    }
}

export const getUserByIdService = async (userId) => {
    try {
        const user = await User.findById(userId)
        if (!user) {
            throw new Error('User not found')
        }
        return { success: true, error: false, user }
    } catch (error) {
        return { success: false, error }
    }
}

export const updateUserByIdService = async (userId, userData) => {
    try {
        const user = await User.findById(userId)
        user.set(userData)
        await user.save()

        if (!user) {
            throw new Error('user not found')
        }
        return { success: true, error: false, user }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteUserByIdService = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId)
        if (!user) {
            throw new Error('User not found')
        }
        await OTP.findOneAndDelete({ user_id: userId })

        return { success: true, error: false }
    } catch (error) {
        return { success: false, error }
    }
}
