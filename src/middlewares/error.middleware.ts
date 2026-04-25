import { NextFunction, Request, Response } from "express";
import { Error as MongooseError } from "mongoose";

type AppError = Error & {
  statusCode?: number;
  code?: number;
};

export const notFoundHandler = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`) as AppError;
  error.statusCode = 404;
  next(error);
};

export const errorHandler = (
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  if (error instanceof MongooseError.ValidationError) {
    res.status(400).json({
      ok: false,
      message: "Validation error",
      errors: Object.values(error.errors).map((item) => item.message),
    });
    return;
  }

  if (error instanceof MongooseError.CastError) {
    res.status(400).json({
      ok: false,
      message: "Invalid identifier provided",
    });
    return;
  }

  if (error.code === 11000) {
    res.status(409).json({
      ok: false,
      message: "A record with the same unique value already exists",
    });
    return;
  }

  res.status(error.statusCode || 500).json({
    ok: false,
    message: error.message || "Internal server error",
  });
};
