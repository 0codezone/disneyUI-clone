import HomePage from "./HomePage"; // Make sure this path is correct
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    if (username === "user" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Routes>
        {/* Use anonymous function to delay execution of handleLogin */}
        <Route
          path="/"
          element={
            loggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to="/home" />
            ) : (
              <div className=" flex justify-center items-center w-full h-[100vh]">
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="rounded-md border-none outline-none p-2 text-black"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-md border-none outline-none p-2  text-black"
                  />
                  <button
                    onClick={handleLoginClick}
                    className="p-2 bg-blue-500 rounded-md"
                  >
                    Login
                  </button>

                  <p className="text-red-500">
                    Login using <br />
                    <span>username : user , password : password</span>
                  </p>
                </div>
              </div>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
