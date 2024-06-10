import { Schema, model } from "mongoose";

interface IClass {
  date: string;
  time: string;
  duration: string;
  topic: string;
  instructor: string;
  instructorImage: string;
  githubLink: string;
  isUpcoming: boolean;
  tech: string;
}

const classSchema = new Schema<IClass>({
  date: { type: String, required: true },
  time: { type: String, required: true },
  duration: { type: String, required: true },
  topic: { type: String, required: true },
  instructor: { type: String, required: true },
  instructorImage: { type: String, required: true },
  githubLink: { type: String, required: true },
  isUpcoming: { type: Boolean, required: true },
  tech: { type: String, required: true },
});

const Class = model<IClass>("Class", classSchema);

export default Class;