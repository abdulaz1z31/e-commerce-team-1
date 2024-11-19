import { verifyTokens } from '../helpers/index.helper.js'
import { logger } from '../utils/index.utils.js'

export const checkTokens = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            logger.info('UNAUTHORIZED')
            return res.status(401).json({ error: 'Authentication is required' })
        }
        const token = authHeader.split(' ')[1]
        if (!token) {
            logger.info('Token is not found')
            return res.status(401).json({ error: 'Token is not found' })
        }
        const decode = verifyTokens('access', token)

        req.user = decode
        next()
    } catch (err) {
        logger.error('Error in token verification:', err)
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            error: 'Server error while verifying token',
        })
    }
}
