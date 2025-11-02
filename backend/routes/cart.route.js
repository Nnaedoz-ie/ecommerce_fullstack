import express from "express";
const router = express.Router();
import {
  addToCart,
  removeAllFromCart,
  updateQuantity,
  getCartProducts,
} from "../controllers/cart.controller.js";

import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/", protectRoute, updateQuantity);
router.get("/", protectRoute, getCartProducts);

export default router;
