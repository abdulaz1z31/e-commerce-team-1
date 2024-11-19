import { logger } from '../utils/index.utils.js'

export const validationMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body)
        if (error) {
            const errorMessages = error.details
                .map((detail) => detail.message)
                .join(', ')
            logger.error(`Validation error: ${errorMessages}`)

            return res.status(400).json({
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
