import express from "express";
import {
  createUser,
  getAllUsers,
  loginUser,
} from "../controllers/users.controller.js";

// users routes

const userRoutes = express.Router();

userRoutes.route("/").get(getAllUsers);
userRoutes.route("/signUp").post(createUser);
userRoutes.route("/login").post(loginUser);

export default userRoutes;
