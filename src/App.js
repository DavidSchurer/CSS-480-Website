import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ThingsToReadPage from './ThingsToRead';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route index element={<Home />} />
      <Routes>
        <Route path="/things-to-read" element={<ThingsToReadPage />} />
      </Routes>
    </Router>
  );
}

export default App;