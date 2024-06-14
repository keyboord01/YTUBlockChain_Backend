import { Request, Response, NextFunction } from "express";
import Joi from "joi";

// Validation schema
const classSchema = Joi.object({
  date: Joi.date().required(),
  time: Joi.string().required(),
  duration: Joi.string().required(),
  topic: Joi.string().required(),
  instructor: Joi.string().required(),
  instructorImage: Joi.string().uri(),
  githubLink: Joi.string().uri().required(),
  ClassLocation: Joi.string().required(),
  tech: Joi.string().required(),
});

// Validation middleware
const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const { error } = classSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateClass;
