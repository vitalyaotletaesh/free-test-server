import Router from 'express'
import {createQuestion, getAll, getLastId} from "../controllers/questionController.js"

const router = new Router()

router.post('/create', createQuestion)
router.get('/maxId', getLastId)
router.get('/getAll', getAll)
router.get('/:id',)
router.delete('/:id',)

export default router