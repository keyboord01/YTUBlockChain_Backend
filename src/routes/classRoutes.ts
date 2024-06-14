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
import validateClass from "../middleware/classValidation";

const router = express.Router();

router.get("/", getClasses);
router.post(
  "/",
  protect,
  upload.single("instructorImage"),
  validateClass,
  createClass
);
router.get("/:id", getClassById);
router.put(
  "/:id",
  protect,
  upload.single("instructorImage"),
  validateClass,
  updateClassById
);
router.delete("/:id", protect, deleteClass);

export default router;
