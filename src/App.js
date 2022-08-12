import { ReactDOM } from "react";
import "./App.css";
import Demo from "./Components/Demo";
import UseReducerdemo from "./Components/UseReducerdemo";
import UseMemodemo from "./Components/UseMemodemo";
import UseCallback from "./Components/UseCallback";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import UseImperativehandler from "./Components/UseImperativehandler";
import UseLayoutEffect from "./Components/UseLayoutEffect";
import UseDebudValue from "./Components/UseDebudValue";
import UseTransition from "./Components/UseTransition";
import UseDefferedValue from "./Components/UseDefferedValue";
import UseId from "./Components/UseId";
function App() {
  return (<>
  <center/>
    <h1 style={{color:'purple',fontFamily:'fantasy'}}><u>Additional Hooks:</u></h1>

      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route index element={<Demo />} />
        <Route path="usereducer" element={<UseReducerdemo />} />
        <Route path="usememodemo" element={<UseMemodemo />} />
        <Route path="usecallback" element={<UseCallback />} />
        <Route path="useemperativehandler" element={<UseImperativehandler/>}/>
        <Route path="uselayout" element={<UseLayoutEffect/>}/>
        <Route path="usedebugvalue" element={<UseDebudValue/>}/>
        <Route path="usedefferedvalue" element={<UseDefferedValue/>}/>
        <Route path="usetransition" element={<UseTransition/>}/>
        <Route path="useid" element={<UseId/>}/>
        </Routes>
      </Router>

    
    {/* // <UseReducerdemo/>
    // <Demo/>
    // <UseMemodemo/>
    // <UseCallback/> */}
    </>
  );
}

export default App;
