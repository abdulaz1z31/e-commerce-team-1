import {
    createUserService,
    deleteUserByIdService,
    getAllUsersService,
    getUserByIdService,
    updateUserByIdService,
} from '../service/index.service.js'

import { logger } from '../utils/index.utils.js'

export const createUser = async (req, res, next) => {
    try {
        const result = await createUserService(req.body)
        const { success, error } = result
        if (success) {
            logger.info('User created successfully')
            return res.status(201).send('created')
        } else {
            logger.error('User creation failed')
            return res.status(400).send({ error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const result = await getAllUsersService()
        const { success, error } = result
        if (success) {
            const { users } = result
            logger.info('Retrieved all users successfully')
            res.status(200).send({ users })
        } else {
            logger.error('Users not found')
            res.status(404).send(error)
        }
    } catch (error) {
        next(error)
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id
        const user = await getUserByIdService(userId)
        if (!user) {
            logger.error('User not found by ID')
            res.status(404).send({
                message: 'user not found',
            })
        }
        logger.info('User retrieved by ID successfully')
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const updateUserById = async (req, res, next) => {
    try {
        const { role } = req.user
        const updateData = { ...req.body, role }
        const userId = req.params.id
        const result = await updateUserByIdService(userId, updateData)
        const { success, error } = result

        if (success) {
            const { user } = result
            logger.info('User updated successfully')
            res.status(200).send({ message: 'User updated', user })
        } else {
            logger.error('User update failed')
            res.status(400).send(error.message)
        }
    } catch (error) {
        next(error)
    }
}

export const deleteUserById = async (req, res, next) => {
    try {
        const userId = req.params.id
        const result = await deleteUserByIdService(userId)
        const { success, error } = result
        if (success) {
            logger.info('User deleted successfully')
            res.status(200).send('User not found')
        } else {
            logger.error('User deletion failed')
            res.status(400).send(error.message)
        }
    } catch (error) {
        next(error)
    }
}
