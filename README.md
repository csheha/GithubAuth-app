# GithubAuth-app

A simple MERN stack app with GitHub OAuth login using Passport.js and JWT authentication.Users can log in via GitHub, view their profile info, and securely log out.

# Features

    * GitHub OAuth login via Passport.js
    * Session-based authentication with express-session

# Tech Stack

    Frontend: React, Axios
    Backend: Node.js, Express, Passport.js, express-session
    Authentication: GitHub OAuth (passport-github2)
    Others: CORS, dotenv

# Setup and Installation

    1. Clone the repository
        https://github.com/csheha/GithubAuth-app.git
        cd GithubAuth-app

    2. Backend Setup
        cd server
        npm install

        Create a .env file in /server:
            SESSION_SECRET=your_session_secret
            GITHUB_CLIENT_ID=your_github_client_id
            GITHUB_CLIENT_SECRET=your_github_client_secret
            SESSION_SECRET=your_session_secret

        Start the backend server:
            npm start

    3. Frontend Setup
        cd ../client
        npm install
        npm run dev

        The frontend runs on http://localhost:5173 by default.


# Usage

    Open http://localhost:5173 in your browser.
    Click Login with GitHub.
    Authenticate with GitHub.
    View your username and GitHub ID.
    Click Logout to end the session and clear cookies.

# Folder Structure

    bash
    Copy code
    github-auth-mern/
    ├── client/        # React frontend
    ├── server/        # Express backend
    ├── .gitignore
    ├── README.md

# Important Notes

    Make sure your GitHub OAuth app has the callback URL set to http://localhost:5000/auth/github/callback.

    For production, ensure cookie.secure is set to true in session config and use HTTPS.

    Currently, user data is not persisted in the database; you can add MongoDB to store users.

# License

    MIT License
