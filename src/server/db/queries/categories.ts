import { Query } from '../index'
import { CategoriesT } from '../modals'

const all = () => Query<CategoriesT[]> ('SELECT * FROM categories');

export default {
    all
}