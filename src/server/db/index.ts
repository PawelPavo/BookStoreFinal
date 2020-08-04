import * as mysql from 'mysql'
import config from '../config'

const pool = mysql.createPool(config.mysql);

export const Query = <T=any>(query?: string, values?:any) => {
    const sql = mysql.format(query, values)
    console.log(sql)

    return new Promise<T>((resolve, reject) => {
        pool.query(sql, (error, results) => {
            if (error) {
                reject({error, msg: 'Failed in the Pool'})
            } else {
                resolve(results)
            }
        })
    })
}

import bookstore from './queries/bookstore';
import categories from './queries/categories';
import tokens from './queries/tokens';
import users from './queries/users'



export default {
    bookstore,
    categories,
    tokens,
    users
}
