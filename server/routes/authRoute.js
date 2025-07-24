// routes/authRoute.js
import express from "express";
import passport from "passport";
import {
  startGitHubAuth,
  handleGitHubCallback,
  showProfile,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/github", startGitHubAuth);
router.get("/github/callback", handleGitHubCallback);
router.get("/profile", showProfile);
router.get("/logout", logoutUser);

export default router;
