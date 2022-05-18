import mongoose from 'mongoose'
import {User} from './user.model';
import {Role} from './role.model';

mongoose.Promise = global.Promise;

interface db {
    mongoose: any,
    user: any,
    // role: any,
    // ROLES: any
}

const db : db = {
    mongoose,
    user : null,
    // role : null,
    // ROLES : null,
};

db.mongoose = mongoose;
db.user = User;
// db.role = Role;

export {db};