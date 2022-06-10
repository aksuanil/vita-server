import { db } from '../models'
import { IFood } from '../interfaces';

const Food = db.food;

interface MealParameters {
    mealCount: number;
    dailyIntake: number;
    allergens: Array<string>;
    ingridents: Array<string>;
    prepDifficulty: number;
}


const getSingleMeal = (mealParameters: MealParameters) => {
    
}

export const getFoodByName = (req: any, res: any) => {
    Food.findOne({
        foodName: req.query.foodName,
    })
        .exec((err: any, food: IFood) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!food) {
                return res.status(404).send({ message: "Food Not found." });
            }
            res.status(200).send({
                foodName: food.foodName,
            });
        });
};

