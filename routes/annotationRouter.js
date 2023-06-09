import Router from 'express'
import {createAnnotation, deleteAnnotation, getOne} from '../controllers/annotationController.js'

const router = new Router()

router.post('/create', createAnnotation)
// router.get('/', getAll)
router.get('/', getOne)
router.delete('/delete/:id', deleteAnnotation)

export default router