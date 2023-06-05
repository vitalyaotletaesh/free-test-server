import Router from 'express'
import {createQuestion, getAll} from "../controllers/questionController.js"

const router = new Router()

router.post('/create', createQuestion)
router.get('/', getAll)
router.get('/:id',)
router.delete('/:id',)

export default router