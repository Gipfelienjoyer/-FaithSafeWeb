import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./04-pages/Home";
import LogIn from "./04-pages/LogIn";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
              <Route path="/login" element={
                  <LogIn/>
              }/>
            <Route path="/" element={
              <Home/>
            } />
              <Route path="/home" element={
                  <Home/>
              } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
