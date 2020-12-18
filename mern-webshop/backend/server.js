import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js"
import colors from "colors"
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

connectDb()

const app = express();

app.use("/api/products",productRoutes)

app.get("/", (req, res) => {
  res.send("Api running");
});


const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`server running in ${process.env.NODE_ENV} profile on port: ${PORT} `.yellow.bold)
);
