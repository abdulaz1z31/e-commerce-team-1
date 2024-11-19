import { Router } from 'express'
import {
    activeUser,
    changePassword,
    forgetPassword,
    loginUser,
    registerUser,
    userProfileController,
} from '../controller/index.controller.js'
import { validationMiddleware } from '../middleware/index.middleware.js'
import { loginSchema, userSchema } from '../database/schemas/index.schema.js'
import { checkTokens } from '../middleware/checkTokens.middleware.js'

export const authRouter = Router()

authRouter.post('/register', validationMiddleware(userSchema), registerUser)
authRouter.post('/login', validationMiddleware(loginSchema), loginUser)
authRouter.post('/activate', checkTokens, activeUser)
authRouter.get('/me', checkTokens, userProfileController)
authRouter.post('/forget/password', checkTokens, forgetPassword)
authRouter.post('/forget/password/:id', checkTokens, changePassword)
