import mongoose from 'mongoose'
import {User} from './user.model';
import {Food} from './food.model';

mongoose.Promise = global.Promise;

interface db {
    mongoose: any,
    user: any,
    food: any,
    // role: any,
    // ROLES: any
}

const db : db = {
    mongoose,
    user : null,
    food : null,
    // role : null,
    // ROLES : null,
};

db.mongoose = mongoose;
db.user = User;
db.food = Food;

export {db};