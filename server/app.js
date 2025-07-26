import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
// Custom modules
import authRoutes from "./routes/authRoute.js";
import "./config/passport.js";

// Initialize dotenv
dotenv.config();

// Initialize Express app
const app = express();

// cors: connect to the frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

/*  set up session middleware
    session: store user data in session */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // Set to true in production if using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day (optional but good)
    },
  })
);

// Sets up Passportny
app.use(passport.initialize());
//Connects Passport with Express sessions
app.use(passport.session());

// Routes : Auth routes
app.use("/auth", authRoutes);

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Welcome to the GitHub Auth App");
});
