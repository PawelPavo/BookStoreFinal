import * as passport from 'passport'
import { Router } from 'express'
import { createToken} from '../../utils/tokens'
import { ReqUser} from '../../utils/interfaces'

const router = Router()

router.post('/', passport.authenticate('local'), async (req:ReqUser, res) => {
    const userDTO = req.user
    try {
        const token = await createToken({userid: userDTO.id, role: userDTO.role});
        res.json({
            token,
            roles: userDTO.role
        })
    } catch (error) {
        console.log(error)
        res.status(500).json('Error in local strategy!')
    }
})

export default router;