// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login'; 
import Signup from './pages/Signup';
import DashboardAdmin from './pages/DashboardAdmin';
import Residents from './components/Residents'; 
import Requests from './components/Requests'; 
import Settings from './components/Settings';
import { Toaster } from 'react-hot-toast'; 
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Layout from './components/Layout';



function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/admindashboard" element={<DashboardAdmin />} />
    <Route element={<Layout />}>
      <Route path="/residents" element={<Residents />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  </Routes>
  <Toaster/>
</Router>
  );
}

export default App;
