// src/controllers/authController.ts
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const user = new User({ username, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
        expiresIn: "30d",
      });

      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
