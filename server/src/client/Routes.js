import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
  </Routes>
);
