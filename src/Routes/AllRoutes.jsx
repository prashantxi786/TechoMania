import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from '../Components/Authentication/ProductPage';
import SingleProduct from '../Components/Authentication/SingleProductPage';




const AllRoutes = () => {
  return <Routes>
    <Route path="/ProductPage" element={<ProductPage/>}/>
    <Route path="/ProductPage/:id" element={<SingleProduct/>}/>
  </Routes>;
};

export default AllRoutes;
