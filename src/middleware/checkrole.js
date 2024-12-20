import { logger } from '../utils/index.utils.js'

export const roleGuard = (...roles) => {
    return async (req, res, next) => {
        try {
            const userRole = req.user.role
            const userId = req.user.id
            const role = req.body?.role

            if (roles.includes(userRole) && role !== 'superAdmin') {
                next()
            } else {
                logger.error('Permission Denied')
                res.status(403).send('Permission Denied')
            }
        } catch (error) {
            logger.error('Server Error')
            res.status(500).send('Server Error')
        }
    }
}
