import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./04-pages/Home";
import LogIn from "./04-pages/LogIn";
import Registration from "./04-pages/Registration";

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
              <Route path="/register" element={
                  <Registration/>
              } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
