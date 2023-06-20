import {Attempt, User} from "../models/models.js";
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

// export const getAll = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         let users = [];
//
//         const attempts = await Attempt.findAll({ where: { testId: id } });
//
//         for (const attempt of attempts) {
//             const userId = attempt.userId;
//             if (userId) {
//                 const user = await User.findByPk(userId);
//                 if (user) {
//                     users.push(user);
//                 }
//             }
//         }
//
//         return res.json({ attempts, users });
//     } catch (err) {
//         next(ApiError.badRequest(err.message));
//     }
// };

export const getAll = async (req, res, next) => {
    try {
        const { id } = req.params;
        const attempts = await Attempt.findAll({ where: { testId: id } });

        const results = await Promise.all(attempts.map(async (attempt) => {
            const userId = attempt.userId;
            if (userId) {
                const user = await User.findByPk(userId);
                if (user) {
                    return { attempt, user };
                }
            }
            return { attempt };
        }));

        return res.json(results);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
};

export const getAttempts = async (req, res, next) => {
    try {
        const attempts = await Attempt.findAll();
        return res.json(attempts);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
};
