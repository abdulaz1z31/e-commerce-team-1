import { app } from './src/app.js'
import { logger } from './src/utils/index.utils.js'
import {connectMongodb} from "./src/database/database.js"
import { application } from './src/config/index.config.js'
const bootstrap = () => {
    try {
        app.listen(application.port, async () => {
            await connectMongodb();
            logger.info(`server running on port: ${application.port}`)
        })
    } catch (error) {
        logger.error(error)
    }
}

bootstrap()
