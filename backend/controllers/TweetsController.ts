import express from "express";
import { TweetsModel, TweetsModelI } from "../models/TweetsModel";

class TweetsController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const tweets = await TweetsModel.find({}).exec();
      res.json({ tweets });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data: TweetsModelI = {
        text: req.body.text,
        user: req.body.user,
      };

      const tweets = await TweetsModel.create(data);
      res.json({ status: "success", tweets });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}
export const TweetsCtrl = new TweetsController();
