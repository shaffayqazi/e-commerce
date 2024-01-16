import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import {
  adminMiddleware,
  requireSignIn,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

//routing
//register
router.post("/register", registerController);

//login  post method
router.post("/login", loginController);

//test route
router.get("/test", requireSignIn, adminMiddleware, testController);

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

export default router;
