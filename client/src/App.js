import React from "react";
import Index from "./pages";
import Login from "./pages/login";

import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
