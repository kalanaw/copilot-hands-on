import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/login';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>
      Welcome to copilot hands on session
      </h1>
      {/* configure routes, home and login */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<G />} />
      </Routes> */}


    </div>
  );
}

export default App;
