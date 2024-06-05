import express from "express";
import { getClasses, createClass } from "../controllers/classController";

const router = express.Router();

router.get("/", getClasses);
router.post("/", createClass);

export default router;
