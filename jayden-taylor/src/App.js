import React from 'react';
import Header from './components/Header';
import LinksContainer from './components/LinksContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <LinksContainer />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default App;
