import {Question, Test} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

export const createQuestion = async (req, res, next) => {
    try {
        const {name, answer1, answer2, answer3, answer4, correct_answer, testId} = req.body
        const question = await Question.create({name, answer1, answer2, answer3, answer4, correct_answer, testId})

        return res.json(question)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getAll = async (req, res, next) => {
    try {
        let {limit, slide} = req.query
        slide = parseInt(slide) || 1
        limit = parseInt(limit) || 1
        let offset = slide * limit - limit
        let questions

        questions = await Question.findAll({offset, limit})

        return res.json(questions)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}