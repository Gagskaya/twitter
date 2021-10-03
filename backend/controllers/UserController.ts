import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// import { validationResult } from "express-validator";
import {
  UserModel,
  UserModelDocumentInterface,
  UserModelInterface,
} from "../models/UserModel";
import { generateMD5 } from "../utils/generateHash";
import { sendEmail } from "../utils/sendEmail";

const isValidObjectId = mongoose.Types.ObjectId.isValid;

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
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   res.status(450).json({ status: "error", errors: errors.array() });
      //   return;
      // }
      console.log(req.body);
      const randomStr = Math.random().toString();
      const data: UserModelInterface = {
        email: req.body.email,
        username: req.body.username,
        password: generateMD5(req.body.password + process.env.SECRET_KEY),
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
          }/auth/verify?hash=${data.confirmHash}">по этой ссылке</a>`,
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
  async show(req: express.Request, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id;
      if (!isValidObjectId(userId)) {
        res.status(400).send();
        return;
      }

      const user = await UserModel.findById(userId).exec();
      if (!user) {
        res.status(404).send();
        return;
      }
      res.json({
        status: "success",
        users: user,
      });
    } catch (error) {
      res.status(400).json({ error: error });
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
  async login(req: express.Request, res: express.Response) {
    try {
      const user =
        req.user && (req.user as UserModelDocumentInterface).toJSON();

      res.json({
        status: "success",
        user: {
          ...user,
          token: jwt.sign({ data: req.user }, process.env.SECRET_KEY || "123", {
            expiresIn: "30d",
          }),
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
  async getUserInfo(req: express.Request, res: express.Response) {
    try {
      const user =
        req.user && (req.user as UserModelDocumentInterface).toJSON();
      res.json({
        status: "success",
        user: user,
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
