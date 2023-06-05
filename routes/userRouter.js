import {Router} from "express"
import {
    register,
    getMe,
    login,
    deleteUser,
    updateUsername,
    updateEmail
} from '../controllers/userController.js'
import {checkAuthMiddleware} from "../middleware/checkAuthMiddleware.js"
import {checkRoleMiddleware} from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post('/register', register)
router.post('/login',login)
router.get('/getMe', checkAuthMiddleware, getMe)
router.patch('/update/username', checkAuthMiddleware, updateUsername)
router.patch('/update/email', checkAuthMiddleware, updateEmail)
router.delete('/delete/:id', checkRoleMiddleware('ADMIN'), deleteUser)

export default router