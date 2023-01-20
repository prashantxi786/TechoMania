import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Components/Authentication/PrivateRoute';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ProductPage from '../Pages/ProductPage';
import SingleProduct from '../Pages/SingleProductPage';

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
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/:id" element={<SingleProduct/>}/>
      {/* <Route path="/signup" element={<Signup/>}/> */}
      {/* <Route path="/admin" element={<AdminPanel/>}/> */}
      {/* <Route path="/admin/products" element={<Products/>}/> */}
    </Routes>
  );

};
export default AllRoutes;