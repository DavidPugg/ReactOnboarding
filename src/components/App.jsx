import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage/SearchPage";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:type" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:movieId" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}
