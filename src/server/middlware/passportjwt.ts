import * as passport from 'passport';
import * as passportJwt from 'passport-jwt';
import config from '../config';
import db from '../db';
import { IPayload } from '../utils/interfaces';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new passportJwt.Strategy(
    {
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret
    },
    async (jwt_payload: IPayload, done) => {
        try {
            const [user] = await db.users.one(jwt_payload.userid);
            if (user) {
                delete user.password;
                done(null, user)
            } else {
                done(null, false)
            }
        } catch (error) {
            console.log(error)
            done(error)
        }
    }));