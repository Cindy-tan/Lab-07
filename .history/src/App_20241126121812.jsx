import React from "react";
import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./Components/Countries";
import Details from "./Components/Details";

const App = () => {
  return (
    <BrowserRouter basename="world-kingdoms">
      <Routes>
        <Route path="/" element={<Countries />}>
          <Route path="countries/:cca2" element={<Details />} />
        </Route>
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
