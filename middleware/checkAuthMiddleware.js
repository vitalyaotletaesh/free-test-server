import jwt from 'jsonwebtoken'

export const checkAuthMiddleware = (req, res, next) => {
    // if (req.METHODS === "OPTIONS") {
    //     next()
    // }
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({message: 'Не авторизован'})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (err) {
        return res.status(401).json({message: 'Ошибка при getMe'})
    }
}