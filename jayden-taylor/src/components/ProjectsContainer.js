import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectsContainer.css';

const ProjectsContainer = () => (
  <div className="projects-container">
    <h3 className="projects-title">Projects</h3>
    <ProjectItem title="Project 1" description="Brand Identity, Motion Design, Presentation Design" />
    <ProjectItem title="Project 2" description="Product Design, Prototyping" />
    <ProjectItem title="Project 3" description="Adobe After Effects, Adobe Premier" />
  </div>
);

export default ProjectsContainer;
