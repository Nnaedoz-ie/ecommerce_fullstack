import express from "express";
const router = express.Router();
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

router.get("/", protectRoute, getCoupon);
router.get("/validate", protectRoute, validateCoupon);

export default router;
