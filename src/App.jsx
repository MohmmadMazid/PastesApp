import React from "react";
import { useSelector } from "react-redux";
import {} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Paste from "./components/Paste";
import UpdatePaste from "./components/UpdatePaste";
import Seepaste from "./components/Seepaste";
function App() {
  const data = useSelector((state) => state.pastes);
  console.log("data of the reducer is ", data.pastes);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paste" element={<Paste />} />
        <Route path="/update/:id" element={<UpdatePaste />} />
        <Route path="/seePaste/:id" element={<Seepaste />} />
      </Routes>
    </div>
  );
}

export default App;
