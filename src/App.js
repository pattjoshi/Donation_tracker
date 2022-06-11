import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";

import { Route, Routes } from "react-router-dom";
import DonationDetels from "./component/DonationDetels";
import Creator from "./component/Creator";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Creator />} />
        <Route path="/donate/:id" element={<DonationDetels />} />
      </Routes>
    </>
  );
};

export default App;
