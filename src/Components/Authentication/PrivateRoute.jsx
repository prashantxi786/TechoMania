import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // const { isLoggedIn, isAdmin } = useSelector((store) => store.authManager);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!currentUser) return <Navigate to='/login' />;
  return children;
};
export default PrivateRoute;

/*
if (isLoggedIn) {
    if (isAdmin) {
      // setTimeout(() => navigate('/admin'), 2000);
      return <Navigate to='/admin' />;

    //  return navigate('/admin')
  
    } else {
      // setTimeout(() => navigate('/'), 2000);
      return <Navigate to='/' />;
    //  return navigate('/')


    } else {
      return children;

    }
  }
  return <Navigate to='/login' />;
  // return navigate('/login');
 */
