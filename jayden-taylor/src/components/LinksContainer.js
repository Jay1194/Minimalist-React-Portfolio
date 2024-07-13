import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LinksContainer.css';

const LinksContainer = () => (
  <div className="links-container">
    <a href="#">
      Resume
    </a>
    <Link to="/ask-me-anything">Ask Me Anything</Link>
    <a href="/bucket-list">Bucket list</a>
  </div>
);

export default LinksContainer;