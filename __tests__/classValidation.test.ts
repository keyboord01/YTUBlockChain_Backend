import validateClass from "../src/middleware/classValidation";
import { Request, Response, NextFunction } from "express";

describe("validateClass middleware", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it("should call next() if validation passes", () => {
    req.body = {
      date: "2024-07-15",
      time: "10:00 AM",
      duration: "2 hours",
      topic: "Blockchain Fundamentals",
      instructor: "John Doe",
      githubLink: "https://github.com/johndoe/blockchain",
      ClassLocation: "Room 101",
      tech: "Blockchain",
    };

    validateClass(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
  });

  it("should return 400 if validation fails", () => {
    req.body = {
      time: "10:00 AM",
      duration: "2 hours",
      topic: "Blockchain Fundamentals",
      instructor: "John Doe",
      githubLink: "https://github.com/johndoe/blockchain",
      ClassLocation: "Room 101",
      tech: "Blockchain",
    };

    validateClass(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: expect.any(String),
    });
  });
});
