import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";
import { verify } from "jsonwebtoken";
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, "abcde");
    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Token invalid",
    });
  }
}
