import { Router } from 'express'
import {
    getAllAddressesController,
    getAddressByIdController,
    createAddressController,
    updateAddressByIdController,
    deleteAddressByIdController,
} from '../controller/index.controller.js'
export const addressRouter = Router()
addressRouter.get('/', getAllAddressesController)
addressRouter.get('/:id', getAddressByIdController)
addressRouter.post('/', createAddressController)
addressRouter.put('/:id', updateAddressByIdController)
addressRouter.delete('/:id', deleteAddressByIdController)
