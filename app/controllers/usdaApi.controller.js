var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUsdaDataByName } from '../middlewares';
import { db } from '../models';
const Food = db.food;
const getFoodDataByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodResponse = yield getUsdaDataByName(req.query.usdaSearch);
        res.status(200).send(foodResponse);
    }
    catch (error) {
        res.status(400).send("An error occured when getting data from USDA." + error);
    }
});
const addFoodToDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = yield req.body.postFood;
        const obj = JSON.parse(search);
        //Mongo Insert
        const food = new Food({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
        });
        food.save((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            else {
                res.send({ message: "Food was registered successfully!" });
                return;
            }
        });
    }
    catch (error) {
        res.status(400).send("An error occured when inserting data to DB." + error);
    }
});
export { getFoodDataByName, addFoodToDb };
