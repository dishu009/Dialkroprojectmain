import express from "express";
import {
  businessbycategory,
  businessbycity,
  createBusiness,
  createBusinessReviewandrating,
  deleteBusiness,
  findBusinessReviewandrating,
  getBusiness,
  getBusinessById,
  updateBussiness,
} from "../controllers/businessController.js";
import auth from "../middelware/auth.js";
const BusnessRoutes = express.Router();

BusnessRoutes.get("/business", getBusiness);
BusnessRoutes.get("/business/:id", getBusinessById);
BusnessRoutes.put("/business/:id", updateBussiness);
BusnessRoutes.get("/category", businessbycategory);
BusnessRoutes.get("/city", businessbycity);

// BusnessRoutes.post("/business", auth, createBusiness);
BusnessRoutes.post("/business", auth, createBusiness);
BusnessRoutes.delete("/business/:id", auth, deleteBusiness);
BusnessRoutes.post("/business/review/:id", auth, createBusinessReviewandrating);-
BusnessRoutes.get("/business/reviewrating/:id", findBusinessReviewandrating);

export default BusnessRoutes;
