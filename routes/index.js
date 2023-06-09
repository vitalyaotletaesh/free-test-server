import Router from 'express'
const router = new Router()

import testRouter from './testRouter.js'
import questionRouter from './questionRouter.js'
import authRouter from './userRouter.js'
import categoryRouter from "./categoryRouter.js"
import annotationRouter from "./annotationRouter.js";
import statisticRouter from "./statisticRouter.js";
import attemptRouter from "./attemptRouter.js";

router.use('/auth', authRouter)
router.use('/test', testRouter)
router.use('/question', questionRouter)
router.use('/category', categoryRouter)
router.use('/annotation', annotationRouter)
router.use('/statistic', statisticRouter)
router.use('/attempt', attemptRouter)

export default router