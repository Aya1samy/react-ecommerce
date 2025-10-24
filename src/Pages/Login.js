import React, { useState } from "react";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No user found. Please register first.");
      return;
    }
    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("loggedIn", true);
      setError("");
      alert("You have loggedIn successfully");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="fs-1 my-1">Login</h2>
        <hr></hr>
        <div className="row">
          <div className="col-sm-6 col-md-4 mx-auto text-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label text-start">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Password"
                  name="pswd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>
                New Here? <a href="/register">Register</a>
              </p>
              <button
                type="submit"
                className="btn btn-secondary d-block mx-auto"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
