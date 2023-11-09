import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from '../pages/Home';
import Register from "../components/Register";
import Login from "../components/Login";
import Search from "../components/Search";
import { CityList } from '../components/CityList';
import BreweryDetail from '../components/BreweryDetail';


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cities" element={<CityList />} />
      <Route path="/search" element={<Search />} />
      <Route path="/brewery/:id" component={<BreweryDetail />} />
    </Routes>
  );
}

export default AllRoutes;
