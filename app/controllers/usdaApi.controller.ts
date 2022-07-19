import { getUsdaDataByName } from '../middlewares';
import { db } from '../models'

const Food = db.food;

const getFoodDataByName = async (req: any, res: any) => {
    try {
        const foodResponse = await getUsdaDataByName(req.query.usdaSearch);
        res.status(200).send(foodResponse);
    } catch (error) {
        res.status(400).send("An error occured when getting data from USDA." + error);
    }
};

const addFoodToDb = async (req: any, res: any) => {
    try {
        const search = await req.body.postFood;
        const obj = JSON.parse(search);
        //Mongo Insert
        const food = new Food({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
        });
    
        food.save((err: any, user: any) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            else {
                res.send({ message: "Food was registered successfully!" });
                return;
            }
        });

    } catch (error) {
        res.status(400).send("An error occured when inserting data to DB." + error);
    }
};

export { getFoodDataByName, addFoodToDb };