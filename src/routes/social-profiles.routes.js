import { Router } from 'express'
import {
    getAllSocialProfilesController,
    getSocialProfilesByIdController,
    createSocialProfilesController,
    updateSocialProfilesByIdController,
    deleteSocialProfilesByIdController,
} from '../controller/index.controller.js'
export const socialProfilesRouter = Router()
socialProfilesRouter.get('/', getAllSocialProfilesController)
socialProfilesRouter.get('/:id', getSocialProfilesByIdController)
socialProfilesRouter.post('/', createSocialProfilesController)
socialProfilesRouter.put('/:id', updateSocialProfilesByIdController)
socialProfilesRouter.delete('/:id', deleteSocialProfilesByIdController)
