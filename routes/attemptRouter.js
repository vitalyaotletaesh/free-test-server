import Router from 'express'
import {createAttempt, getAll} from '../controllers/attemptController.js'

const router = new Router()

router.post('/create', createAttempt)
router.get('/:id', getAll)

export default router