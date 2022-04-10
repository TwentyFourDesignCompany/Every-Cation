import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicInfo from "./screens/BasicInfo";
import CovidScreen from "./screens/CovidScreen";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Shop from "./screens/Shop";
import ShopScreen from "./screens/ShopScreen";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/covid-travel" element={<CovidScreen />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
