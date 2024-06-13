import { Schema, model } from "mongoose";

interface IClass {
  date: string;
  time: string;
  duration: string;
  topic: string;
  instructor: string;
  instructorImage: string;
  githubLink: string;
  ClassLocation: string;
  tech: string;
}

const classSchema = new Schema<IClass>({
  date: { type: String, required: true },
  time: { type: String, required: true },
  duration: { type: String, required: true },
  topic: { type: String, required: true },
  instructor: { type: String, required: true },
  instructorImage: { type: String, required: false },
  githubLink: { type: String, required: true },
  ClassLocation: { type: String, required: false },
  tech: { type: String, required: true },
});

const Class = model<IClass>("Class", classSchema);

export default Class;
