import React from "react";
import { Route, Routes } from "react-router-dom";
import Orders from "../../Pages/AdPages/Orders";
import Checkout from "../../Pages/Checkout";
import Dashboard from "../../Pages/AdPages/Dashboard";
import Products from "../../Pages/AdPages/Products";
import Settings from "../../Pages/AdPages/Settings";

const AdRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/checkout" element={<Checkout />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default AdRoutes;
