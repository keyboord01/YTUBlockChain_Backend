import * as express from "express";

declare global {
  namespace Express {
    interface MulterS3File extends Express.Multer.File {
      location: string;
    }

    interface Request {
      file: MulterS3File;
    }
  }
}
