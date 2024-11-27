import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./Components/Countries";
import Details from "./Components/Details";
import styles from "./Home.module.css";

const App = () => {
  return (
    <div className={}>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Countries />}>
          <Route path="countries/:cca2" element={<Details />} />
        </Route>
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
};

export default App;
