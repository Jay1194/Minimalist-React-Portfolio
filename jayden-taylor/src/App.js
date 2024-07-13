import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LinksContainer from './components/LinksContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import AskMe from './components/AskMe';
import BucketList from './components/BucketList';
import './App.css';

// Component to conditionally render Header and adjust content layout
const AppWrapper = () => {
  const location = useLocation();

  return (
    <div className={`container ${location.pathname === '/ask-me-anything' || location.pathname === '/bucket-list' ? 'no-header' : ''}`}>
      {/* Conditionally render Header and LinksContainer based on pathname */}
      {location.pathname !== '/ask-me-anything' && location.pathname !== '/bucket-list' && <Header />}
      {location.pathname !== '/ask-me-anything' && location.pathname !== '/bucket-list' && <LinksContainer />}
      <Routes>
        <Route path="/" element={<ProjectsContainer />} />
        <Route path="/ask-me-anything" element={<AskMe />} />
        <Route path="/bucket-list" element={<BucketList />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

