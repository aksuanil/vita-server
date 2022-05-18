import mongoose from 'mongoose';
import { User } from './user.model';
mongoose.Promise = global.Promise;
const db = {
    mongoose,
    user: null,
    // role : null,
    // ROLES : null,
};
db.mongoose = mongoose;
db.user = User;
// db.role = Role;
export { db };
