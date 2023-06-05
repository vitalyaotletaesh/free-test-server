import Router from 'express'
import {createCategory, deleteCategory, getAll, getOne} from '../controllers/categoryController.js'
import {checkRoleMiddleware} from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post('/create', checkRoleMiddleware('ADMIN'), createCategory)
router.get('/', getAll)
router.get('/:id', getOne)
router.delete('/delete/:id', checkRoleMiddleware('ADMIN'), deleteCategory)

export default router