import { ReactDOM } from "react";
import "./App.css";
import Demo from "./Components/Demo";
import UseReducerdemo from "./Components/UseReducerdemo";
import UseMemodemo from "./Components/UseMemodemo";
import UseCallback from "./Components/UseCallback";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
function App() {
  return (<>
  <center/>
    <h1 style={{color:'purple',fontFamily:'fantasy'}}>Additional Hooks:</h1>

      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route index element={<Demo />} />
        <Route path="usereducer" element={<UseReducerdemo />} />
        <Route path="usememodemo" element={<UseMemodemo />} />
        <Route path="usecallback" element={<UseCallback />} />
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
