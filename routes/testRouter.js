import Router from 'express'
import {createTest, deleteTest, updateTest, getAll, getOne, getMy, incCompletes} from '../controllers/testController.js'
import {checkAuthMiddleware} from "../middleware/checkAuthMiddleware.js"

const router = new Router()

router.post('/create', createTest)
router.post('/incCompletes', incCompletes)
router.patch('/update', updateTest)
router.get('/', getAll)
router.get('/my/:id', getMy)
router.get('/:id', getOne)
router.delete('/delete/:id', deleteTest)

export default router