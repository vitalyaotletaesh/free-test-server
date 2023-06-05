import Router from 'express'
const router = new Router()

import testRouter from './testRouter.js'
import questionRouter from './questionRouter.js'
import authRouter from './userRouter.js'
import categoryRouter from "./categoryRouter.js";

router.use('/auth', authRouter)
router.use('/test', testRouter)
router.use('/question', questionRouter)
router.use('/category', categoryRouter)

export default router