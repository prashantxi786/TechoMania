import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Components/Authentication/PrivateRoute';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Homepage from "../Pages/Homepage"
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
    </Routes>
  );
};
