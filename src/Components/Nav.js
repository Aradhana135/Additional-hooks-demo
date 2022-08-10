import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div
      style={{ height: 200, weidth: 300, background: "", borderColor: "aqua" }}
    >
      <ul type="circle">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usereducer">UseReducerdemo</Link>
        </li>
        <li>
          <Link to="/usememodemo">UseMemodemo</Link>
        </li>
        <li>
          <Link to="/usecallback">UseCallback</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
