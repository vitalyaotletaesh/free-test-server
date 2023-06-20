import Router from 'express'
import {createAttempt, getAll, getAttempts} from '../controllers/attemptController.js'

const router = new Router()

router.post('/create', createAttempt)
router.get('/', getAttempts)
router.get('/:id', getAll)

export default router