var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { config } from '../config/auth.config';
import { db } from '../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const User = db.user;
// const Role = db.role;
const signup = (req, res) => {
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    user.save((err, user) => {
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
const signin = (req, res) => {
    User.findOne({
        email: req.body.email,
    })
        .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ message: "Invalid Password!" });
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400, // 24 hours
        });
        req.session.token = token;
        console.log(req.session);

        res.status(200).send({
            id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
        });
    });
};
const signout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
    }
    catch (err) {
        return res.status(500).send({ message: err });
        // this.next(err);
    }
});
export { signup, signin, signout };
