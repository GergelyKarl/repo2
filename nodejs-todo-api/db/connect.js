const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = `${process.env.MONGO_URI}`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
