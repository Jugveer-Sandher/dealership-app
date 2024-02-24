import { verify as jwtVerify, JsonWebTokenError } from "jsonwebtoken";

import type { Request, Response, NextFunction } from "express";
import type { JwtPayload } from "utils/jwt";

interface RequestWithToken extends Request {
  payload?: JwtPayload;
}

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return next(new Error("Missing token"));
  }

  try {
    const decoded = jwtVerify(token, process.env.JWT_ACCESS_SECRET as string);

    if (typeof decoded !== "object") {
      throw new Error("Invalid token");
    }

    (req as RequestWithToken).payload = decoded;
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return next(new Error("Unauthorized"));
    }
    return next(error);
  }

  return next();
};

export { isAuthenticated, type RequestWithToken };
