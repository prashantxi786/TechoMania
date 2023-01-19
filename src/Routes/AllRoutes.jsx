import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Components/Authentication/PrivateRoute';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

const AllRoutes = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default AllRoutes;
