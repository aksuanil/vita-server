import { getUsdaDataByName } from '../middlewares';
import { db } from '../models'

const Food = db.food;

const getFoodDataByName = (req: any, res: any) => {
    try {
        getUsdaDataByName(req.body.usdaSearch);
        res.status(200).send("Public Content.");
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