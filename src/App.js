import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import ThingsToReadPage from './ThingsToRead';
import NavigationBar from './NavigationBar';
import InterestsPage from './InterestsPage';

function App() {
  return (
    <Router basename = "/CSS-480-Website">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/interests-page" />} />
        <Route path="/things-to-read" element={<ThingsToReadPage />} />
        <Route path="/interests-page" element={<InterestsPage />} />
      </Routes>
    </Router>
  );
}

export default App;