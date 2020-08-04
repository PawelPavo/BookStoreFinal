import { Router} from 'express'
import books from './bookstore'

const router = Router();

router.use('/books', books)

export default router
