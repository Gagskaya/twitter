import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import bodyParser from "body-parser";

import "./core/db";

dotenv.config();

import { UserCtrl } from "./controllers/UserController";
import { registerValidations } from "./validations/register";
import { passport } from "./core/passport";
import { TweetsCtrl } from "./controllers/TweetsController";

const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cors());

app.get("/users", UserCtrl.index);
app.get(
  "/users/me",
  passport.authenticate("jwt", { session: false }),
  UserCtrl.getUserInfo
);
app.get("/users/:id", UserCtrl.show);

app.post("/auth/register", UserCtrl.create);
app.post("/auth/login", passport.authenticate("local"), UserCtrl.login);
app.get("/auth/verify", registerValidations, UserCtrl.verify);

app.get("/tweets", TweetsCtrl.index);
app.post("/tweets/post", TweetsCtrl.create);
app.listen(process.env.PORT, (): void => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}!`);
});
