import React from "react";
import "./navBar.css";
import { IoSearch } from "react-icons/io5";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo-cont">
          <h1>E-Commerce</h1>
        </div>
        <div className="mid-cont">
          <Link to={"/"} className="link">
            Home
          </Link>
          <Link to={"/products"} className="link">
            Products
          </Link>
          <Link to={"/about"} className="link">
            About
          </Link>
          <Link to={"/cart"} className="link">
            Cart
          </Link>
        </div>
        <div className="right-cont">
          <div className="input-cont">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="input-box"
            />
            <IoSearch className="search" />
          </div>
          <IoHeartOutline />
          <IoCartOutline />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
