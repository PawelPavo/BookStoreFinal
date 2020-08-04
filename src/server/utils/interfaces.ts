import { Request } from 'express';
import type { TUsers } from "../db/modals";

export type IPayload = {
    userid?: number;
    uniq?: string;
    tokenid?: number;
    role?: string;
}

export interface ReqUser extends Request {
    user: TUsers;
}