import { Router } from 'express'
import db from '../../db'
import {generateSalt} from '../../utils/passwords'
import { createToken } from '../../utils/tokens'

const router = Router ();

router.post('/', async (req, res) => {
    const userDTO = req.body
    try {
        userDTO.password = generateSalt(req.body.password)
        const {insertId} = await db.users.insert(userDTO)
        const token = await createToken({userid: insertId})
        res.json({role: 'guest', token})
    } catch (error) {
        console.log(error);
        res.status(500).json('Failed to register user!')
    }
})

export default router;