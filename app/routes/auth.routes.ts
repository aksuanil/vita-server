import { verifySignUp } from '../middlewares';
import { signup, signin, signout, isLogin } from '../controllers/auth.controller';
import express from 'express';
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const authRouter = express.Router();
import cors from 'cors';
//TODO :: Calling cors both in here and server?
authRouter.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

authRouter.use(function (req: any, res: any, next: any) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept",
        "Access-Control-Allow-Origin"
    );
    next();
});
authRouter.post(
    "/api/auth/signup", jsonParser,
    [
        verifySignUp.verifyInputs,
    ],
    signup
);
authRouter.post("/api/auth/signin",jsonParser, signin);
authRouter.post("/api/auth/signout",jsonParser, signout);
authRouter.get("/api/auth/isLogin",jsonParser, isLogin);

export default authRouter;


