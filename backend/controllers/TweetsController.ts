import express from "express";
import { TweetModel, TweetModelI } from "../models/TweetModel";
import { UserModelDocumentI, UserModelI } from "../models/UserModel";
import { isValidObjectId } from "../utils/isValidObjectId";

class TweetsController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const tweets = await TweetModel.find({})
        .populate("user")
        .sort({ createdAt: "-1" })
        .exec();
      res.json({ tweets });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async show(req: express.Request, res: express.Response): Promise<void> {
    try {
      const tweetId = req.params.id;
      if (!isValidObjectId(tweetId)) {
        res.status(400).send();
        return;
      }

      const tweet = await TweetModel.findById(tweetId).exec();

      if (!tweet) {
        res.status(404).send();
        return;
      }
      res.json({
        status: "success",
        data: tweet,
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      console.log(req.body);
      const user = req.user as UserModelDocumentI;
      if (user._id) {
        const data: TweetModelI = {
          text: req.body.text,
          user: user._id,
        };

        const tweet = await TweetModel.create(data);
        res.json({
          status: "success",
          tweet: await tweet.populate("user").execPopulate(),
        });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
  async delete(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user as UserModelI;
      if (user._id) {
        const tweetId = req.params.id;
        if (!isValidObjectId(tweetId)) {
          res.status(400).send();
          return;
        }
        const tweet = await TweetModel.findById(tweetId);
        if (tweet) {
          if (tweet.user._id.toString() === user._id.toString()) {
            tweet.remove();
            res.send();
          } else {
            res.status(403).send();
          }
        } else {
          res.status(400).send();
        }
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}
export const TweetsCtrl = new TweetsController();
