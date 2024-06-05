import { Request, Response } from "express";
import Class from "../models/Class";

export const getClasses = async (req: Request, res: Response) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const createClass = async (req: Request, res: Response) => {
  const newClass = new Class({
    date: req.body.date,
    time: req.body.time,
    duration: req.body.duration,
    topic: req.body.topic,
    instructor: req.body.instructor,
    instructorImage: req.body.instructorImage,
    githubLink: req.body.githubLink,
    isUpcoming: req.body.isUpcoming,
    tech: req.body.tech,
  });

  try {
    await newClass.save();
    res.status(201).json("class saved");
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
