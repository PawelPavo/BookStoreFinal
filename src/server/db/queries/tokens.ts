import {Query} from '../';
import { DBResp } from '../modals';
import { IPayload } from '../../utils/interfaces';

const insert = (token: IPayload) => {
    delete token.uniq
    delete token.role
    return Query<DBResp>('INSERT INTO tokens SET ?', token)
}

const update = (token: string, id: number) => Query<DBResp>('UPDATE tokens SET token = ? WHERE id = ? ', [token, id])

export default {
    insert,
    update
};