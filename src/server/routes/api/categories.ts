import { Router } from 'express';
import db from '../../db';

const router = Router()

router.get('/', async(req, res, next)=> {
    try {
        const categories = await db.categories.all()
        res.json(categories)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router