import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/login';
import {Routes, Route} from 'react-router-dom';
import { HomePage } from './components/home-page/home-page';

function App() {
  return (
    <div className="App">
      <h1>
      Welcome to copilot hands on session
      </h1>
      <Login></Login>
    </div>
  );
}

export default App;
