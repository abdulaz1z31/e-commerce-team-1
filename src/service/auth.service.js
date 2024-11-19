import { OTP, User } from '../database/models/index.model.js'
import {
    createTokens,
    otpGenerator,
    sendMail,
} from '../helpers/index.helper.js'

export const registerUserService = async (userData) => {
    try {
        const { email } = userData
        const currentUser = await User.findOne({ email })
        if (!currentUser) {
            const user = new User(userData)
            await user.save()
            const oneTimePassword = otpGenerator()

            await sendMail(email, 'OTP', `This is your OTP: ${oneTimePassword}`)

            const db_otp = new OTP({
                user_id: user._id,
                otp_code: oneTimePassword,
            })
            await db_otp.save()

            return { success: true, error: false }
        } else {
            throw new Error('Email already exists')
        }
    } catch (error) {
        return { success: false, error }
    }
}

export const loginUserService = async (userData) => {
    try {
        const { username, password } = userData
        const currentUser = await User.findOne({ username })

        if (!currentUser) {
            throw new Error('User not found')
        }

        const passwordIsEqual = await currentUser.compare(password)
        console.log(passwordIsEqual)

        if (!passwordIsEqual) {
            throw new Error('Email or password is not valid')
        }
        const payload = {
            id: currentUser._id,
            username: currentUser.username,
            email: currentUser.email,
            role: currentUser.role,
        }
        const token = createTokens(payload)

        return { success: true, error: false, token }
    } catch (error) {
        return { success: false, error }
    }
}

export const activeUserService = async (userData) => {
    try {
        const { email } = userData
        const currentUser = await User.findOne({ email })

        if (!currentUser) {
            throw new Error('User not found')
        }

        const user = await User.updateOne(
            { _id: currentUser._id },
            { is_active: true },
        )

        return { success: true, error: false }
    } catch (error) {
        return { success: false, error }
    }
}

export const userProfileService = async (payload) => {
    try {
        const currentUser = await User.findOne({ email: payload.email }).select(
            {
                password: 0,
            },
        )
        if (!currentUser) {
            throw Error('user not found')
        } else {
            return { success: true, error: false, user: currentUser }
        }
    } catch (error) {
        return { success: false, error }
    }
}

export const forgetPasswordService = async (data) => {
    try {
        const { email } = data
        const currentUser = await User.findOne({ email })
        if (!currentUser) {
            throw new Error('User not found')
        }

        const oneTimePassword = otpGenerator()
        await sendMail(
            email,
            'OTP',
            `This is your OTP key for change password: ${oneTimePassword}\n
            And your link to change password:"${`http://localhost:3000/user/forget/password/${currentUser._id}`}"`,
        )
        const newp = await OTP.updateOne(
            { user_id: currentUser._id },
            { otp_code: oneTimePassword },
        )
        console.log(newp)

        return { success: true, error: false }
    } catch (error) {
        return { success: false, error }
    }
}

export const changePasswordService = async (userData) => {
    try {
        const { userId, otp, newPassword } = userData
        const otpdata = await OTP.findOne({ user_id: userId })
        const otpCode = otpdata.otp_code
        if (otpCode != otp) {
            throw new Error('Otp not valid try again')
        }
        const user = await User.findById(userId)
        user.password = newPassword
        await user.save()

        return { success: true, error: false }
    } catch (error) {
        return { success: false, error }
    }
}
