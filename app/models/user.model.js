import mongoose from "mongoose";
const User = mongoose.model(
//collection name
"User", new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
}));
export { User };
