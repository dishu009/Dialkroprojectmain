import express from "express";
import {
  findBusinessByUser,
  forgotPassword,
  getUserbyId,
  getUsers,
  loginUser,
  logout,
  // profile,
  register,
  resetPassword,
  updateUser,
} from "../controllers/userController.js";
import auth from "../middelware/auth.js";
const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", loginUser);

//ADMIN
userRoutes.get("/users", auth, getUsers);

//USER
userRoutes.put("/profile/:id",  updateUser);
userRoutes.get("/profile/:id", auth, getUserbyId);

userRoutes.post("/profile/forgot", forgotPassword);
userRoutes.post("/profile/reset/:token", resetPassword);

userRoutes.get("/profile/business/:id", auth, findBusinessByUser);
userRoutes.get("/logout", auth, logout);
export default userRoutes;
