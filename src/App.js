import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Checkout from "./Pages/Checkout";
import Header from './Header';

function App() {
  return (
   
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/checkout" element = {[<Header/>,<Checkout/>]}/> 
            
          <Route path = "/login" element = {<Login/>}/> 
  
          <Route path="/" element = {[<Header/>,<Home/>]}/> 
          
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
