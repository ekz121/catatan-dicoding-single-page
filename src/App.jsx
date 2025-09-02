import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import AddPage from './pages/AddPage.jsx';
import ArchivePage from './pages/ArchivePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Router>
      <div className="notes-app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;