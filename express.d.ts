import { Request } from "express";
import { MulterFile } from "multer";

declare module "express-serve-static-core" {
  interface Request {
    file?: MulterFile;
  }
}

interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}
