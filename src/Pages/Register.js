import React, { useState } from "react";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value }); //use [] because it is computed property name means “use the value of this variable as the property name.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.fname || !userData.password || !userData.email) {
      alert("Please fill in all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("loggedIn", false);

    alert("You have registered successfully");
    navigate("/login");
  };
  return (
    <>
      <div className="container my-5">
        <h2 className="fs-1 my-1">Register</h2>
        <hr></hr>
        <div className="row">
          <div className="col-sm-6 col-md-4 mx-auto text-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter Your Name"
                  name="fname"
                  value={userData.fname}
                  onChange={handleChange}
                />
              </div>
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
                  value={userData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <p>
                Already has an account? <a href="/login">Login</a>
              </p>
              <button
                type="submit"
                className="btn btn-secondary d-block mx-auto"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
