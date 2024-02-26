import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Not_Found } from "./pages";

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Not_Found />} />
      </Routes>
    </Suspense>
  );
}

export default App;
