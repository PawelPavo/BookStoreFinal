import * as bcrypt from 'bcrypt';

// brings the password from frint-end form and salts and hashes it
export const generateSalt = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}


// brings the passsword from the front-end and hash from database and compares them
export const comparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}