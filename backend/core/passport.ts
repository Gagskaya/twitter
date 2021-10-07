import passport from "passport";
import { UserModel, UserModelI } from "../models/UserModel";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { generateMD5 } from "../utils/generateHash";

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (username, password, done): Promise<void> => {
      try {
        const user = await UserModel.findOne({
          $or: [{ email: username }, { username }],
        }).exec();
        if (!user) {
          return done(null, false);
        }
        if (user.password === generateMD5(password + process.env.SECRET_KEY)) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY || "123",
      jwtFromRequest: ExtractJwt.fromHeader("token"),
    },
    async (payload: { data: UserModelI }, done): Promise<void> => {
      try {
        const user = await UserModel.findById(payload.data._id).exec();
        if (user) {
          return done(null, user);
        }
        done(null, false);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.serializeUser(function (user: any, done): void {
  done(null, user?._id);
});

passport.deserializeUser(function (id, done) {
  UserModel.findById(id, function (err: any, user: any) {
    done(err, user);
  });
});
export { passport };
