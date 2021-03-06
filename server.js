import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { dbConfig } from './app/config/db.config';
import { db } from './app/models';
import user from './app/routes/user.routes';
import auth from './app/routes/auth.routes';
import food from './app/routes/food.routes';
const app = express();
app.use(cookieSession({
    name: "bezkoder-session",
    secret: "COOKIE_SECRET",
    httpOnly: true
}));
app.use('/', auth);
app.use('/', food);
app.use('/', user);
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Vita API." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
db.mongoose
    .connect(`mongodb+srv://${dbConfig.dbUsername}:${dbConfig.dbPassword}@cluster0.qcf7o.mongodb.net/${dbConfig.dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
})
    .catch((err) => {
    console.error("Connection error", err);
    process.exit();
});
// function initial() {
//   Role.estimatedDocumentCount((err: any, count: number) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save((err: any) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'user' to roles collection");
//       });
//       new Role({
//         name: "moderator"
//       }).save((err: any) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'moderator' to roles collection");
//       });
//       new Role({
//         name: "admin"
//       }).save((err: any) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
