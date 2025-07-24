// GitHub Strategy configuration
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

// Initialize dotenv to load environment variables
dotenv.config();

// Use GitHub login strategy (how to log users in with GitHub)
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

// Serialize the whole user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize the same object
passport.deserializeUser((user, done) => {
  done(null, user);
});
