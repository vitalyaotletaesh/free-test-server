import {Statistic} from "../models/models.js";
import {ApiError} from "../error/ApiError.js";

export const createStatistic = async (req, res, next) => {
    try {
        const {questionId} = req.body
        const statistic = await Statistic.create({questionId})
        return res.json(statistic)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const incrementAnswerDone1 = async (req, res, next) => {
    try {
        const {questionId} = req.body
        const statistic = await Statistic.increment('answerDone1', {by: 1, where: {questionId}})
        const total = await Statistic.increment('answersTotal', {by: 1, where: {questionId}})
        return res.json({statistic, total})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const incrementAnswerDone2 = async (req, res, next) => {
    try {
        const {questionId} = req.body
        const statistic = await Statistic.increment('answerDone2', {by: 1, where: {questionId}})
        const total = await Statistic.increment('answersTotal', {by: 1, where: {questionId}})
        return res.json({statistic, total})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const incrementAnswerDone3 = async (req, res, next) => {
    try {
        const {questionId} = req.body
        const statistic = await Statistic.increment('answerDone3', {by: 1, where: {questionId}})
        const total = await Statistic.increment('answersTotal', {by: 1, where: {questionId}})
        return res.json({statistic, total})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const incrementAnswerDone4 = async (req, res, next) => {
    try {
        const {questionId} = req.body
        const statistic = await Statistic.increment('answerDone4', {by: 1, where: {questionId}})
        const total = await Statistic.increment('answersTotal', {by: 1, where: {questionId}})
        return res.json({statistic, total})
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}

export const getOne = async (req, res, next) => {
    try {
        const {questionId} = req.query
        const statistic = await Statistic.findAll({where: {questionId}})
        return res.json(statistic)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }
}