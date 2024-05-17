import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ThingsToReadPage from './ThingsToRead';
import NavigationBar from './NavigationBar';
import InterestsPage from './InterestsPage';

function App() {
  return (
    <Router basename = "/PoC-Color-and-Styling">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things-to-read" element={<ThingsToReadPage />} />
        <Route path="/interests-page" element={<InterestsPage />} />
      </Routes>
    </Router>
  );
}

export default App;