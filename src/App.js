// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // this is tell dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtil"
          about="About TextUtil"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
       
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
             exact path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze" showAlert={showAlert}/>} />
          </Routes>

          {/* <TextForm  heading = "Enter the text to analyze"  showAlert ={showAlert}/> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
