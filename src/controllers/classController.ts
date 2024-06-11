import { Request, Response } from "express";
import Class from "../models/Class";

interface S3File extends Express.Multer.File {
  location: string;
}

export const getClasses = async (req: Request, res: Response) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const createClass = async (req: Request, res: Response) => {
  let instructorImageUrl = "";

  if (req.file) {
    instructorImageUrl = (req.file as S3File).location;
  }

  const newClass = new Class({
    date: req.body.date,
    time: req.body.time,
    duration: req.body.duration,
    topic: req.body.topic,
    instructor: req.body.instructor,
    instructorImage: instructorImageUrl,
    githubLink: req.body.githubLink,
    isUpcoming: req.body.isUpcoming,
    tech: req.body.tech,
  });

  try {
    await newClass.save();
    res.status(201).json({ message: "Class saved" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
