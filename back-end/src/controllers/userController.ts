import { getUserByEmail, getUserById, updateProfile } from "../services/userService";
import type { RequestWithToken } from "../middleware/auth";
import type { Request, Response, NextFunction } from "express";

const GetUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.params;
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error(`User with email = ${email} does not exist`);
    }
    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

const GetUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const paramId = req.params.id;
    const user = await getUserById(paramId);
    if (!user) {
      throw new Error(`User with id = ${paramId} does not exist`);
    }
    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        avatarUrl: user.avatarUrl,
        bio: user.bio,
      },
    });
  } catch (error) {
    next(error);
  }
};

const UpdateUser = async (req: RequestWithToken, res: Response, next: NextFunction) => {
  try {
    const payloadId = req.payload?.id || "";
    const paramId = req.params.id;
    if (paramId !== payloadId) throw new Error("user not authenticated");
    const { avatarUrl, bio, email, displayName } = req.body;
    if (!displayName || !email) {
      throw new Error("Missing required display name, email cannot update");
    }
    const updatedProfile = await updateProfile(payloadId, avatarUrl, bio, email, displayName);
    res.status(200).json({
      updatedProfile,
    });
  } catch (err) {
    next(err);
  }
};

export { GetUserByEmail, GetUserById, UpdateUser };
