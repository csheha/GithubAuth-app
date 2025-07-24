import express from "express";
import passport from "passport";

export const startGitHubAuth = passport.authenticate("github", {
  scope: ["user:email"],
});

export const handleGitHubCallback = passport.authenticate("github", {
  failureRedirect: "/",
  successRedirect: "http://localhost:5173/",
});

export const showProfile = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }

  res.send(`
    <h2>Logged in as: ${req.user.username}</h2>
    <p>GitHub ID: ${req.user.id}</p>
    <p><a href="/logout">Logout</a></p>
  `);
};

export const logoutUser = (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
};
