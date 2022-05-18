import { verifySignUp } from '../middlewares';
import { signup, signin, signout } from '../controllers/auth.controller';
import express from 'express';
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const authRouter = express.Router();

authRouter.use(function (req: any, res: any, next: any) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    );
    next();
});
authRouter.post(
    "/api/auth/signup", jsonParser,
    [
        verifySignUp.checkDuplicateEmail,
    ],
    signup
);
authRouter.post("/api/auth/signin",jsonParser, signin);
authRouter.post("/api/auth/signout",jsonParser, signout);

export default authRouter;


