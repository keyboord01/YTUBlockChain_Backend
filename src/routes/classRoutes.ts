import express from "express";
import { getClasses, createClass } from "../controllers/classController";
import { protect } from "../middleware/authMiddleware";
import upload from "../config/multer";

const router = express.Router();

router.get("/", getClasses);
router.post("/", protect, upload.single("instructorImage"), createClass);

export default router;
