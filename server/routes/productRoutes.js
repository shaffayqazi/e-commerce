import express from "express";

import {
  createProductController,
  getProductsController,
  singleProductController,
  productPhotoController,
} from "../controllers/productConroller.js";

import formidable from "express-formidable";

const router = express.Router();

//create a new product

router.post("/create-product", formidable(), createProductController);

//get all products
router.get("/get-product", getProductsController);

//get a single product
router.get("/get-product/:slug", singleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);



export default router;
