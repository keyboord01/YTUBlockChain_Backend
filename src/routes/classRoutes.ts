import express from "express";
import {
  getClasses,
  createClass,
  getClassById,
  updateClassById,
  deleteClass,
} from "../controllers/classController";
import { protect } from "../middleware/authMiddleware";
import upload from "../config/multer";

const router = express.Router();

router.get("/", getClasses);
router.post("/", protect, upload.single("instructorImage"), createClass);
router.get("/:id", getClassById);
router.put("/:id", protect, upload.single("instructorImage"), updateClassById);
router.delete("/:id", protect, deleteClass);

export default router;
