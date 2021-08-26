import mongoose from "mongoose";

mongoose.Promise = Promise;

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://crucial:95371gogA@cluster0.c3b8l.mongodb.net/twitter?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

export { db, mongoose };
