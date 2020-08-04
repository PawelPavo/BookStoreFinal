import { Router} from 'express'
import books from './bookstore'
import categories from './categories'

const router = Router();

router.use('/books', books)
router.use('/categories', categories)

export default router
