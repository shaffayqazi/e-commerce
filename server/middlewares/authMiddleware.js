import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protect routes
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
    //check if token exist
  } catch (error) {
    console.log(error);
  }
};





//admin middleware
export const adminMiddleware = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user.role == 1) {
      return res.status(403).send({
        success: false,
        message: "Admin resource access denied",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(403).send({
      success: false,
      message: "Admin resource access denied",
      error
    });
  }
};
