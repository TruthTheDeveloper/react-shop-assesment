import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Layout/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}/>
    </Routes>
  );
}

export default App;
