import { RequestHandler } from "express"

export const bookBody: RequestHandler = (req, res, next) => {
    const bookKeys = Object.keys(req.body)
    if (bookKeys.includes('newCategory') && bookKeys.includes('title') && bookKeys.includes('author') && bookKeys.includes('price')) {
        next()
    } else {
        res.status(400).json({
            error: 'Bad request for adding a book!'
        })
    }
}