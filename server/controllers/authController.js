import express from "express";
import passport from "passport";

export const startGitHubAuth = passport.authenticate("github", {
  scope: ["user:email"],
  prompt: "login",
});

export const handleGitHubCallback = passport.authenticate("github", {
  failureRedirect: "http://localhost:5173/",
  successRedirect: "http://localhost:5173/",
});

export const showProfile = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }

  res.json({
    username: req.user.username,
    id: req.user.id,
  });
};

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out" });
    });
  });
};
