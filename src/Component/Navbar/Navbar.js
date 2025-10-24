import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const checkActive = ({ IsActive }) => {
    return {
      color: IsActive ? "black" : "",
    };
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand fw-bold" href="/">
          React Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <NavLink
                style={checkActive}
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={checkActive} className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={checkActive} className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={checkActive} className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink className="btn btn-outline-dark" to="/login" type="">
              <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
              Login
            </NavLink>
            <NavLink
              className="btn btn-outline-dark mx-3 "
              to="/register"
              type=""
            >
              <i className="fa-solid fa-user-plus me-2"></i>
              Register
            </NavLink>
            <NavLink className="btn btn-outline-dark" to="/cart" type="">
              <i className="fa-solid fa-cart-shopping me-2"></i>
              Cart (0)
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
