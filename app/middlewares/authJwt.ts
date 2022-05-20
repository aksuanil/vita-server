import {db} from '../models'
import {config} from '../config/auth.config'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json();

const User = db.user;
// const Role = db.role;

const verifyToken = (req : any, res : any, next : any) => {
  let token = req.session.token;
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, config.secret, (err : any, decoded : any) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken,
};
export {authJwt};