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
    ClassLocation: req.body.ClassLocation,
    tech: req.body.tech,
    createdAt: new Date(),
  });

  try {
    await newClass.save();
    res.status(201).json({ message: "Class saved" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getClassById = async (req: Request, res: Response) => {
  try {
    const classById = await Class.findById(req.params.id);
    if (!classById) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.json(classById);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const updateClassById = async (req: Request, res: Response) => {
  let instructorImageUrl = "";

  if (req.file) {
    instructorImageUrl = (req.file as S3File).location;
  }

  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      {
        date: req.body.date,
        time: req.body.time,
        duration: req.body.duration,
        topic: req.body.topic,
        instructor: req.body.instructor,
        instructorImage: instructorImageUrl || req.body.instructorImage,
        githubLink: req.body.githubLink,
        ClassLocation: req.body.ClassLocation,
        tech: req.body.tech,
      },
      { new: true }
    );

    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.json(updatedClass);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.json({ message: "Class deleted" });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
