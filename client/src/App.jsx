import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/profile")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  const handleLogout = () => {
    axios.get("http://localhost:5000/auth/logout").then(() => setUser(null));
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>GitHub Auth App</h1>
      {user ? (
        <>
          <h2>Welcome, {user.username}</h2>
          <p>ID: {user.id}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login with GitHub</button>
      )}
    </div>
  );
}

export default App;
