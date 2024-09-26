import React from 'react';
import '../css/ProjectItem.css';

const ProjectItem = ({ title, description }) => (
  <a className="project-item" href="/">
    <div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  </a>
);

export default ProjectItem;
