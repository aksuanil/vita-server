import { getFoodByName } from '../controllers/diet.controller';
import express from 'express';
const foodRouter = express.Router();
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
foodRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});
foodRouter.get("/api/food/getFoodByName", jsonParser, getFoodByName);
export default foodRouter;
