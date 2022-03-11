import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:type" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:movieId" element={<DetailsPage />} />
        <Route path="/movie" element={<PopularPage />} />
      </Routes>
    </Router>
  );
}
