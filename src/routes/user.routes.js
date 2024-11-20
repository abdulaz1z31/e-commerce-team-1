import { Router } from 'express'
import { checkTokens } from '../middleware/checkTokens.middleware.js'
import { roleGuard } from '../middleware/checkrole.js'
import {
    createUser,
    deleteUserById,
    getAllUsers,
    getUserById,
    updateUserById,
} from '../controller/index.controller.js'
export const userRouter = Router()

userRouter.post('/user', createUser)
userRouter.get('/user', checkTokens, roleGuard('admin'), getAllUsers)
userRouter.get('/user/:id', checkTokens, roleGuard('admin'), getUserById)
userRouter.put('/user/:id', checkTokens, roleGuard('admin'), updateUserById)
userRouter.delete('/user/:id', checkTokens, roleGuard('admin'), deleteUserById)

// menimcha getUserById da roleGuard kerakmas