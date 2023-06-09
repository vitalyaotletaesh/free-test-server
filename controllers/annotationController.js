import {Annotation} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

export const createAnnotation = async (req, res, next) => {
    try {
        const {name, questionId} = req.body
        const annotation = await Annotation.create({name, questionId})
        return res.json(annotation)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const deleteAnnotation = async (req, res, next) => {
    try {
        const {id} = req.params
        await Annotation.destroy({where: {id}})
        return res.json({message: 'Annotation успешно удалён'})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getAll = async (req, res, next) => {
    try {
        const annotation = await Annotation.findAll()
        return res.json(annotation)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {questionId} = req.query
        const annotation = await Annotation.findAll({where: {questionId}})
        return res.json(annotation)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}