import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div
      style={{ height: 200, weidth: 300, background: "", borderColor: "aqua" }}
    >
      <ul type="circle" style={{display:"flow-root"}}>
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
        <li>
          <Link to="/useemperativehandler">UseEmperativeHandler</Link>
        </li>
        <li>
          <Link to="/uselayout">UseLayoutEffect</Link>
        </li>
        <li>
          <Link to="/usedebugvalue">UseDebugValue</Link>
        </li>
        <li>
          <Link to="/usedefferedvalue">useDefferedValue</Link>
        </li>
        <li>
          <Link to="/usetransition">UseTransition</Link>
        </li>
        <li>
          <Link to="/useid">UseId</Link>
        </li>
        <li>
          <Link to="/useinsertion">UseInsertion</Link>
        </li>
        <li>
          <Link to="/usesyncexternalstore">UseSyncExternalstore</Link>
        </li>
      
      </ul>
    </div>
  );
};

export default Nav;
