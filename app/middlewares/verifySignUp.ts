import { db } from '../models/index';

// const ROLES = db.ROLES;
const User = db.user;
const checkDuplicateEmail = (req: any, res: any, next: any) => {
    // Email
    User.findOne({
        email: req.body.email
    }).exec((err: any, user: any) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }
        next();
    });
};
const verifySignUp = {
    checkDuplicateEmail
};
export {verifySignUp};