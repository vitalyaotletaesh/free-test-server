import {Attempt} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

export const createAttempt = async (req, res, next) => {
    try {
        const {userId, testId, result} = req.body
        const attempt = await Attempt.create({userId, testId, result})
        return res.json(attempt)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}