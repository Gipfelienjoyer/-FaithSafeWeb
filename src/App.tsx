import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./04-pages/Home";
import LogIn from "./04-pages/LoginPage";
import RegisterPage from "./04-pages/RegisterPage";
import Tos from "./04-pages/tos";

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
                  <RegisterPage/>
              } />
              <Route path="/tos" element={
                  <Tos></Tos>
              }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
