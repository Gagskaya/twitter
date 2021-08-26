import express from "express";
import dotenv from "dotenv";

dotenv.config();

import { UserCtrl } from "./controllers/UserController";
import "./core/db";
import { registerValidations } from "./validations/register";

const app = express();

app.use(express.json());

app.get("/users", UserCtrl.index);
app.post("/users", registerValidations, UserCtrl.create);
// app.post('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);
app.listen(process.env.PORT, (): void => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}!`);
});
