import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authhelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone,role } = req.body;
    //validate
    if (!name || !email || !password || !phone) {
      return res.send({ message: "Please fill all fields" });
    }
    //check if user already exist
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(200).send({
        success: false,
        message: "User already exist",
      });
    }
    //register user
    //hash password
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role,
    }).save();
    console.log(user);
    
    res.status(201).send({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//login controller

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validate
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid credentials",
        error,
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email not found",
        error,
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "login failed",
        error,
      });
    }
    //generate token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //send token to client
    res.status(202).send({
      success: true,
      message: "login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "login failed",
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  res.send("test route");
};
