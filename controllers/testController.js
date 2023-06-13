import {Question, Statistic, Test} from "../models/models.js"
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import {fileURLToPath} from 'url'
import fs from 'fs'

import {ApiError} from "../error/ApiError.js"
import {where} from "sequelize";


export const createTest = async (req, res, next) => {
    try {
        const {name, userId, categoryId, showAnnotation} = req.body
        const {img} = req.files
        let filename = uuidv4() + ".jpg"

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        if (!fs.existsSync('static')) {
            fs.mkdirSync('static')
            console.log('qwe')
        }

        await img.mv(path.resolve(__dirname, '..', 'static', filename))


        const test = await Test.create({name, userId, img: filename, categoryId, showAnnotation})

        return res.json(test)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const updateTest = async (req, res) => {

}

export const deleteTest = async (req, res, next) => {
    try {
        const {id} = req.params
        await Test.destroy({where: {id}})
        return res.json({message: 'Тест успешно удалён'})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getAll = async (req, res, next) => {
    try {
        let {categoryId, name, limit, page} = req.query
        page = parseInt(page) || 1
        limit = parseInt(limit) || 9
        let offset = page * limit - limit
        let tests
        if (!categoryId && !name) {
            tests = await Test.findAndCountAll({offset, limit})
        }
        if (!categoryId && name) {
            tests = await Test.findAndCountAll({where: {name}, limit, offset})
        }
        if (categoryId && !name) {
            tests = await Test.findAndCountAll({where: {categoryId}, limit, offset})
        }
        if (categoryId && name) {
            tests = await Test.findAndCountAll({where: {categoryId, name}, limit, offset})
        }
        return res.json(tests)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {id} = req.params

        const test = await Test.findByPk(id)

        const test2 = await Test.findOne({
            where: {id},
            include: [{model: Question, as: 'questions'}]
        })

        return res.json(test2)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getMy = async (req, res, next) => {
    try {
        const {id} = req.params

        const myTests = await Test.findAll({where: {userId: id}})

        return res.json({myTests: myTests})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const incCompletes = async (req, res, next) => {
    try {
        const {id} = req.body
        const completes = await Test.increment('completes', {by: 1, where: {id}})

        return res.json(completes)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}