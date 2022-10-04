import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Add from "../Pages/Add";
import Fafourite from "../Pages/Favourite";

const Index: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/favourite" element={<Fafourite />} />
    </Routes>
  );
};

export default Index;