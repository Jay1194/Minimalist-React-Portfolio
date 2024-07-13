import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BucketList.css';

const BucketList = () => (
    <div className="bucket-list-container">
    <button className="back-button">
      <Link to="/">Back</Link>
    </button>
    <div className="bucket-list-content">
    <div className="bucket-item strike-item">
      <h3>Run a Marathon</h3>
      <p>Conquered Las Vegas | 2023 </p>
    </div>
    <div className="bucket-item">
      <h3>Get My First Job in Tech</h3>
      <p>Kickstart my career in the tech industry</p>
    </div>
    <div className="bucket-item">
      <h3>Launch a Tech Startup</h3>
      <p>Bring innovative solutions to life</p>
    </div>
    <div className="bucket-item">
      <h3>Master Japanese</h3>
      <p>Experience the culture in Tokyo</p>
    </div>
    <div className="bucket-item">
      <h3>Get Published in a Tech Journal</h3>
      <p>Contribute to the industry knowledge pool</p>
    </div>
    <div className="bucket-item">
      <h3>Achieve Financial Independence</h3>
      <p>Live sustainably and invest wisely</p>
    </div>
    <div className="bucket-item">
      <h3>Build a Smart Home</h3>
      <p>Innovative living space featured in tech magazines</p>
    </div>
    <div className="bucket-item">
      <h3>Give a TED Talk</h3>
      <p>Inspire and educate a global audience</p>
    </div>
    <div className="bucket-item">
      <h3>Travel to Space</h3>
      <p>Experience zero gravity with SpaceX</p>
    </div>
    <div className="bucket-item">
      <h3>Write a Book</h3>
      <p>Share experiences and insights on tech and innovation</p>
    </div>
    <div className="bucket-item">
      <h3>Mentor Aspiring Developers</h3>
      <p>Give back to the tech community</p>
    </div>
    <div className="bucket-item">
      <h3>Attend a Global Tech Conference</h3>
      <p>Network with industry leaders and pioneers</p>
    </div>
    <div className="bucket-item">
      <h3>A picture from me significant event</h3>
      <p>Dallas, Texas | 2022</p>
      </div>
    </div>
  </div>
);

export default BucketList;