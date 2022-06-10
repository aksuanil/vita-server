import { db } from '../models';
const Food = db.food;
const getSingleMeal = (mealParameters) => {
};
export const getFoodByName = (req, res) => {
    Food.findOne({
        foodName: req.query.foodName,
    })
        .exec((err, food) => {
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
