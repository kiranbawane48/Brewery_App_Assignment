import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from '../pages/Home';
import Register from "../components/Register";
import Login from "../components/Login";
import Card from "../components/Card";
import { CityList } from '../components/CityList';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cities" element={<CityList />} />
      <Route path="/search" element={<Card />} />
      
    </Routes>
  );
}

export default AllRoutes;
