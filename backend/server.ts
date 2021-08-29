import express from "express";
import dotenv from "dotenv";

dotenv.config();

import cors from "cors";
import { UserCtrl } from "./controllers/UserController";
import "./core/db";
import { registerValidations } from "./validations/register";
import { loginValidations } from "./validations/login";

const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.get("/users", UserCtrl.index);
app.post("/users", registerValidations, UserCtrl.create);
app.post("/users/login", loginValidations, UserCtrl.login);
app.get("/users/verify", registerValidations, UserCtrl.verify);
// app.post('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);
app.listen(process.env.PORT, (): void => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}!`);
});
