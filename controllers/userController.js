import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {ApiError} from "../error/ApiError.js";
import {User} from '../models/models.js'

const generateJwt = (id, email, username, role) => {
    return jwt.sign(
        {id: id, email, username, role},
        process.env.SECRET_KEY,
        {expiresIn: '7d'},
    )
}

export const register = async (req, res, next) => {
    const {email, username, password, role} = req.body

    if (!email || !password || !username) {
        return next(ApiError.badRequest('Некорректные данные'))
    }

    let candidate = await User.findOne({where: {email}})
    if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }

    candidate = await User.findOne({where: {username}})
    if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким username уже существует'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, username, password: hashPassword, role})

    const token = generateJwt(user.id, user.email, user.username, user.role)

    return res.json({token, user})
}

export const login = async (req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
        return next(ApiError.internal('Пользователь не найден'))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
        return next(ApiError.internal('Неверный email или пароль'))
    }
    const token = generateJwt(user.id, user.email, user.username, user.role)

    return res.json({message: 'Вы успешно авторизовались',token, user})
}

export const getMe = async (req, res, next) => {
    const token = generateJwt(req.user.id, req.user.email, req.user.username, req.user.role)
    res.json({message: 'Пользователь получен', token, role: req.user.role, user: req.user})
}

export const updateUser = async (req, res) => {

}

export const updateUsername = async (req, res, next) => {
    try {
        const {username} = req.body
        await User.update({username: username}, {where: {id: req.user.id}})
        const user = await User.findOne({where: {username}})

        return res.json({message: 'Username был обновлён', user})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const updateEmail = async (req, res, next) => {
    try {
        const {email} = req.body
        await User.update({email: email}, {where: {id: req.user.id}})
        const user = await User.findOne({where: {email}})

        return res.json({message: 'Email был обновлён', user})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const deleteUser = async (req, res) => {

}
