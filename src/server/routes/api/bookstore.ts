import db from '../../db'
import { Router} from 'express'
import { bookBody } from '../../middlware/books'

const router = Router()

router.get('/:id', async(req, res, next)=>{
    const id =(req.params.id)
    try {
        const book = await db.bookstore.one(id)
        res.json(book)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const books = await db.bookstore.all()
        res.json( books)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.post('/', bookBody, async(req, res, next) => {
    const book = req.body
    try {
        const {insertId} = await db.bookstore.insert(book.title,book.author, book.price, book.newCategory)
        res.status(200).json({insertId, msg:'Book added!'})
    } catch (error) {
        console.log({msg:'Failed to add a book!'})
        next(error)
    }
})

router.put('/:id', async(req, res, next) => {
    const id = (req.params.id)
    const title = req.body.title
    const author = req.body.author
    const price = req.body.price
    const newCategory = req.body.newCategory
    try {
        const result = await db.bookstore.update(title,author, price, newCategory, id)
        res.status(200).json({result, msg:'Book has been updated!'})
    } catch (error) {
        console.log(id)
        console.log({error, msg:'Failed to edit book!'})
        next(error)
    }
})

router.delete('/:id', async(req, res, next) =>{ 
    const id = (req.params.id)
    try {
        const results = await db.bookstore.destroy(id)
        res.status(200).json({msg:'Book has been deleted!', results})
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router;