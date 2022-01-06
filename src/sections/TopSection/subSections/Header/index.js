import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import "./styles.scss";
const Header = () => {
  return (
    <div className="esHeader">
      <span>Exceptional Stays</span>
      <div>
        <NavLink
          to={"/host"}
          className={({ isActive }) => (isActive ? "activeESLink" : "")}
        >
          Become a host
        </NavLink>
        <NavLink
          to={"/host"}
          className={({ isActive }) => (isActive ? "activeESLink" : "")}
        >
          About us
        </NavLink>
        <NavLink
          to={"/host"}
          className={({ isActive }) => (isActive ? "activeESLink" : "")}
        >
          Contact us
        </NavLink>
        <NavLink
          to={"/host"}
          className={({ isActive }) => (isActive ? "activeESLink" : "")}
        >
          +233 505 70 7987
        </NavLink>
        <FaRegUserCircle className="profile" />
      </div>
    </div>
  );
};

export default Header;
