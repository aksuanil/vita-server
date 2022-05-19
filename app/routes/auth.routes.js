import { verifySignUp } from '../middlewares';
import { signup, signin, signout } from '../controllers/auth.controller';
import express from 'express';
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const authRouter = express.Router();
import cors from 'cors';
authRouter.use(cors({
    origin: '*'
}));
authRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept", "Access-Control-Allow-Origin");
    next();
});
authRouter.post("/api/auth/signup", jsonParser, [
    verifySignUp.verifyInputs,
], signup);
authRouter.post("/api/auth/signin", jsonParser, signin);
authRouter.post("/api/auth/signout", jsonParser, signout);
export default authRouter;
