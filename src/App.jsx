import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Portfolio from './components/Portfolio';
 

const App = () => {
  const isAuthenticated = () => {
    // Implement your authentication logic here
    return !!localStorage.getItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element= {<Portfolio/>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;