import db from '../../db'
import { Router} from 'express'

const router = Router()

router.get('/', async (req, res, next) => {
    try {
        const books = await db.bookstore.all()
        res.json( books)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router;