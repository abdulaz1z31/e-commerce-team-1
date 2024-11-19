import { logger } from '../utils/index.utils.js'

export const validationMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body)
        if (error) {
            logger.error(error.details.map((detail) => detail.message))
            return res.status(statusCodes.BAD_REQUEST).json({
                error: 'validationError',
                details: error.details.map((detail) => detail.message),
            })
        } else {
            next()
        }
    }
}
