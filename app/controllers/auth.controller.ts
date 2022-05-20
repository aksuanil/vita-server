import { config } from '../config/auth.config'
import { db } from '../models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const User = db.user;
// const Role = db.role;

const signup = (req: any, res: any) => {
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,        
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save((err: any, user: any) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        else {
            res.send({ message: "User was registered successfully!" });
            return;
        }
    });
};

const signin = (req: any, res: any) => {
    
    interface User {
        _id: any,
        id: any,
        name: string,
        lastname: string,
        email: string,
        password: string
    }
    
    User.findOne({
        email: req.body.email,
    })
        .exec((err: any, user: User) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({ message: "Invalid Password!" });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400, // 24 hours
            });
            console.log(req.session)
            req.session.token = token;
            res.status(200).send({
                id: user._id,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
            });
        });
};
const signout = async (req: any, res: any) => {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
        return res.status(500).send({ message: err });
        // this.next(err);
    }
};

export { signup, signin, signout };