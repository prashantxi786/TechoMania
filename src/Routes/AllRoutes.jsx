import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../Components/Authentication/PrivateRoute';
import Homepage from '../Pages/Homepage';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ProductPage from '../Pages/ProductPage';
import SingleProduct from '../Pages/SingleProductPage';
import SearchResults from '../Pages/SearchResults';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
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
      <Route path='/products' element={<PrivateRoute><ProductPage /></PrivateRoute>} />
      <Route path='/products/:id' element={<PrivateRoute><SingleProduct /></PrivateRoute>} />
      <Route path='/' element={<Homepage />} />
      <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />

      <Route path='/querypage/:category/:value' element={<SearchResults/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/:id" element={<SingleProduct/>}/> 
      {/* <Route path="/admin" element={<AdminPanel/>}/> */}
      {/* <Route path="/admin/products" element={<Products/>}/> */}
      <Route path='*' element='' /> {/*Yet to be added*/}
    </Routes>
  );
};
export default AllRoutes;
