import express from "express";
import { createCategoryController } from "../controllers/categoryController.js";
import { updateCategoryController } from "../controllers/categoryController.js";
import { getCategoriesController } from "../controllers/categoryController.js";
import { singleCategoryController } from "../controllers/categoryController.js";
import { deleteCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//create category
router.post("/create-category", createCategoryController);

//update category
router.put("/update-category/:id", updateCategoryController);

//get all categories
router.get("/get-categories", getCategoriesController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete("/delete-category/:id", deleteCategoryController);

export default router;
