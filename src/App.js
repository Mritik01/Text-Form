import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  let toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#3c4632";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="hello" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route exact path="about" element={<About />}>
              {/* <About/> */}
            </Route>
            <Route path="/" element={<Textform heading="Enter you text below" />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
