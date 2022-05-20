import { db } from '../models/index';

const User = db.user;
const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const checkDuplicateEmail = (req: any, res: any, next: any) => {
    User.findOne({
        email: req.body.email
    }).exec((err: any, user: any) => {
        if (err) {
            res.status(500).send({ message: err });
            return false;
        }
        if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return false;
        }
        next();
    });
};

const checkEmailValid = (req: any, res: any, next: any) => {

    let email = req.body.email;

    if (!email) {
        res.status(400).send({ message: "Failed! Email is not provided!" });
        return false;
    }
    if (email.length > 254) {
        res.status(400).send({ message: "Failed! Email is too long!" });
        return false;
    }

    var valid = emailRegex.test(email);
    if (!valid) {
        res.status(400).send({ message: "Failed! Email is not valid!" });
        return false;
    }

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if (parts[0].length > 64) {
        res.status(400).send({ message: "Failed! Email is not valid!" });
        return false;
    }

    var domainParts = parts[1].split(".");
    if (domainParts.some(function (part: any) { return part.length > 63; })) {
        res.status(400).send({ message: "Failed! Email domain is not valid!" });
        return false;
    }

    return true;
}

const verifyInputs = (req: any, res: any, next: any) => {

    if (!req.body.name) {
        res.status(400).send({ message: "Failed! Name is not provided!" });
        return false;
    }
    if (!req.body.lastname) {
        res.status(400).send({ message: "Failed! Lastname is not provided!" });
        return false;
    }
    if (!req.body.password) {
        res.status(400).send({ message: "Failed! Password is not provided!" });
        return false;
    }
    else if (req.body.password.length < 8) {
        res.status(400).send({ message: "Failed! Password can't be shorter than 8 characters!" });
        return false;
    }

    const isEmailValid = checkEmailValid(req, res, next);
    if (isEmailValid) {
        checkDuplicateEmail(req, res, next);
    }
    else {
        return false;
    }
}

const verifySignUp = {
    verifyInputs
};
export { verifySignUp };