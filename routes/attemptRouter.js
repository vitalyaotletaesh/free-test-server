import Router from 'express'
import {createAttempt} from '../controllers/attemptController.js'

const router = new Router()

router.post('/create', createAttempt)

export default router