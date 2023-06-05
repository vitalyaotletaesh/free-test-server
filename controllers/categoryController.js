import {Category, Question, Test} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

export const createCategory = async (req, res, next) => {
    try {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        const {id} = req.params
        await Category.destroy({where: {id}})
        return res.json({message: 'Category успешно удалён'})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getAll = async (req, res, next) => {
    try {
        const categories = await Category.findAll()
        return res.json(categories)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {id} = req.params
        const category = await Category.findOne({where: {id}})
        return res.json(category)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}