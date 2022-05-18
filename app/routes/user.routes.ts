import { authJwt } from '../middlewares';
import { allAccess, userBoard } from '../controllers/user.controller';
import express from 'express';
const userRouter = express.Router();

import bodyParser from 'body-parser';
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

userRouter.use(function (req: any, res: any, next: any) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    );
    next();
});
userRouter.get("/api/test/all", allAccess);
userRouter.get("/api/test/user", jsonParser, [authJwt.verifyToken], userBoard);

export default userRouter;