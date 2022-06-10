import mongoose from 'mongoose';
import { User } from './user.model';
import { Food } from './food.model';
mongoose.Promise = global.Promise;
const db = {
    mongoose,
    user: null,
    food: null,
    // role : null,
    // ROLES : null,
};
db.mongoose = mongoose;
db.user = User;
db.food = Food;
export { db };
