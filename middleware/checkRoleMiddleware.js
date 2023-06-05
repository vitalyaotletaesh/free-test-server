import {ApiError} from "../error/ApiError.js"
import jwt from 'jsonwebtoken'

export const checkRoleMiddleware = (role) => {
    return function (req, res, next) {
        if (req.METHODS === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization
            if (!token) {
                return res.status(401).json({message: 'Не авторизован'})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({message: 'Нет доступа'})
            }
            req.user = decoded
            next()
        } catch (err) {
            return res.status(401).json({message: 'Не авторизован'})
        }
    }
}