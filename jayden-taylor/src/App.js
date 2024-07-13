import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LinksContainer from './components/LinksContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import AskMe from './components/AskMe';
import './App.css';

const AppWrapper = () => {
  const location = useLocation();

  return (
    <div className={`container ${location.pathname === '/ask-me-anything' ? 'no-header-links' : ''}`}>
      {location.pathname !== '/ask-me-anything' && <Header />}
      {location.pathname !== '/ask-me-anything' && <LinksContainer />}
      <Routes>
        <Route path="/" element={<ProjectsContainer />} />
        <Route path="/ask-me-anything" element={<AskMe />} />
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

