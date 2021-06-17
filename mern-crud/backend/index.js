import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/routes.js";

const app = express();
app.use("/posts", router);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const connectString =
  "mongodb+srv://admin:qweqweqwe@cluster0.bv6dt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(4000, () => console.log("connected")))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
