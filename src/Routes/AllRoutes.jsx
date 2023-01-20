import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Components/Authentication/PrivateRoute';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ProductPage from '../Components/Authentication/ProductPage';
import SingleProduct from '../Components/Authentication/SingleProductPage';
const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>}/>
      <Route
        path='/signup'
        element={
          <PrivateRoute>
            <Signup />
          </PrivateRoute>
        }
      />
      <Route
        path='/login'
        element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        }
      />
      <Route path="/ProductPage" element={<ProductPage/>}/>
      <Route path="/ProductPage/:id" element={<SingleProduct/>}/>
      {/* <Route path="/signup" element={<Signup/>}/> */}
      {/* <Route path="/admin" element={<AdminPanel/>}/> */}
      {/* <Route path="/admin/products" element={<Products/>}/> */}
    </Routes>
  );

};
