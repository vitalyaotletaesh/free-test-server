import Router from 'express'
import {
    createStatistic,
    getOne,
    incrementAnswerDone1,
    incrementAnswerDone2,
    incrementAnswerDone3,
    incrementAnswerDone4,
} from '../controllers/statisticController.js'

const router = new Router()

router.post('/create', createStatistic)
router.post('/incAnswer1', incrementAnswerDone1)
router.post('/incAnswer2', incrementAnswerDone2)
router.post('/incAnswer3', incrementAnswerDone3)
router.post('/incAnswer4', incrementAnswerDone4)
router.get('/', getOne)

export default router