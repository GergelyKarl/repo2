import express from "express";
import Product from "../models/productModel.js";
const router = express.Router();
import asyncHandler from "express-async-handler";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);

      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error) {
      res.status(404);
      console.error(error);
    }
  })
);

export default router;
