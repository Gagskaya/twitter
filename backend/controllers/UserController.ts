import express from "express";
import { validationResult } from "express-validator";
import { UserModel, UserModelInterface } from "../models/UserModel";
import { generateMD5 } from "../utils/generateHash";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";
import bcrypt from "bcryptjs";

const generateAccessToken = (id: string) => {
  return jwt.sign(id, "SECRET_KEY");
};

class UserController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({}).exec();
      res.json({
        status: "success",
        users: users,
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: "error", errors: errors.array() });
        return;
      }
      const randomStr = Math.random().toString();
      const hashPassword = bcrypt.hashSync(req.body.password, 7);
      const data: UserModelInterface = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname,
        password: hashPassword,
        confirmHash: generateMD5(
          process.env.SECRET_KEY + randomStr || randomStr
        ),
      };

      const user = await UserModel.create(data);

      sendEmail(
        {
          emailFrom: "admin@twitter.com",
          emailTo: data.email,
          subject: "Подтверждение почты Twitter Clone Tutorial",
          html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${
            process.env.PORT || 8888
          }/users/verify?hash=${data.confirmHash}">по этой ссылке</a>`,
        },
        (err: Error | null) => {
          if (err) {
            res.status(500).json({
              status: "error",
              message: err,
            });
          } else {
            res.status(201).json({
              status: "success",
              data: user,
            });
          }
        }
      );
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
  async login(req: express.Request, res: express.Response) {
    try {
      const { email, password } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: "error", errors: errors.array() });
        return;
      }
      const user = await UserModel.findOne({ email });
      if (!user) {
        res
          .status(400)
          .json({ message: `Пользователь с таким E-mail ${email} не найден` });
      } else {
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
          res.status(400).json({ message: `Введен неправильный пароль` });
        }
        const token = generateAccessToken(user._id.toString());
        return res.json({ token });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "login error",
      });
    }
  }
  async verify(req: express.Request, res: express.Response) {
    try {
      const hash: any = req.query.hash;

      if (!hash) {
        res.status(400).send();
      }
      const user = await UserModel.findOne({ confirmHash: hash }).exec();
      if (user) {
        user.confirmed = true;
        user.save();
      } else {
        res.status(404).json({
          status: "error",
          message: "Пользователь не найден",
        });
      }

      res.json({
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
}

export const UserCtrl = new UserController();
