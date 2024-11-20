import {
    activeUserService,
    changePasswordService,
    forgetPasswordService,
    loginUserService,
    registerUserService,
    userProfileService,
} from '../service/index.service.js'

import { logger } from '../utils/index.utils.js'

export const registerUser = async (req, res, next) => {
    try {
        const result = await registerUserService(req.body)
        const { success, error } = result
        if (success) {
            logger.info('User registered successfully')
            return res.status(201).send('created')
        } else {
            logger.error('User registration conflict')
            return res.status(409).send({ message: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const result = await loginUserService(req.body)
        const { success, error, token } = result
        // console.log(error)

        if (success) {
            logger.info('User logged in successfully')
            res.status(200).json({ message: 'User logged in', token })
        } else {
            logger.error('User login failed')
            res.status(400).send(error.message)
        }
    } catch (error) {
        next(error)
    }
}

export const activeUser = async (req, res, next) => {
    try {
        const result = await activeUserService(req.user)
        const { success, error } = result
        if (success) {
            logger.info('User activated successfully')
            res.status(200).send('You are activated successfully')
        } else {
            logger.error('User activation failed')
            res.status(400).send(error.message)
        }
    } catch (error) {
        next(error)
    }
}

export const userProfileController = async (req, res, next) => {
    try {
        const payload = req.user
        const result = await userProfileService(payload)
        const { success, error } = result
        if (success) {
            const { user } = result
            logger.info('User profile retrieved successfully')
            res.status(200).json({ user })
        } else {
            logger.error('User profile not found')
            res.status(404).send(error.message)
        }
    } catch (error) {
        next(error)
    }
}

export const forgetPassword = async (req, res, next) => {
    try {
        const { email } = req.body
        const result = await forgetPasswordService({ email })
        const { success, error } = result
        // console.log(result)

        if (success) {
            logger.info('Password reset link sent to email')
            res.status(200).send({
                message: 'we send link to your email',
            })
        } else {
            logger.error('Password reset link sending failed')
            res.status(404).send(error.message)
        }
    } catch (error) {
        next(error)
    }
}

export const changePassword = async (req, res, next) => {
    try {
        const userId = req.params.id
        const { otp, newPassword } = req.body
        const data = { userId, otp, newPassword }
        const result = await changePasswordService(data)
        const { success, error } = result
        if (success) {
            logger.info('Password changed successfully')
            res.status(200).send('Password changed successfully')
        } else {
            logger.error('Password change failed')
            res.status(400).send({ message: error.message })
        }
    } catch (error) {
        next(error)
    }
}
