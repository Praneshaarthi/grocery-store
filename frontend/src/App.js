import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Order from './components/Orders.jsx';
import Products from './components/products.jsx';
import Register from './components/Signup.jsx';
import Log from './components/Login.js';
import logo from './components/logo.jpeg';
import './App.css'; 
function App() {
  return (
    <Router>
      <div>
        
        <div className="navibar">
          <img className="logo" src={logo} alt="logo" />
          <Link className="home" to="/">HOME</Link>
          <Link className="products" to="/products">PRODUCTS</Link>
          <Link className="orders" to="/orders">ORDER</Link>
          <Link className="login" to="/login">LOGIN/SIGN UP</Link>
        </div>


        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path='/signup' element={<Register/>}/>
            <Route path="/orders" element={<Order/>} />
            <Route path="/login" element={<Log />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
