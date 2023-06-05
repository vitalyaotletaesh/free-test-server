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
router.use('/.well-known/pki-validation/BBDD04DB91295182F9ED51277894D200.txt', (req, res) => {
    res.sendFile('../.well-known/pki-validation/BBDD04DB91295182F9ED51277894D200.txt')
})

export default router