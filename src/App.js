import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicInfo from "./screens/BasicInfo";
import CovidScreen from "./screens/CovidScreen";
import Home from "./screens/Home";
import ShopScreen from "./screens/ShopScreen";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/covid-travel" element={<CovidScreen />} />
      </Routes>
    </>
  );
}
