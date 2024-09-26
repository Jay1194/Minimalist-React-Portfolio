import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectsContainer.css';

const ProjectsContainer = () => (
  <div className="projects-container">
    <h3 className="projects-title">Projects</h3>
    <ProjectItem title="InboxGeniusAI" description="AI-Powered Email Management, Smart Email Sorting" />
    <ProjectItem title="MyFinance Hub" description="Data-Driven Financial Management, Intuitive Budget Planning" />
    <ProjectItem title="Anoixe Appearal" description="No-Code Streetwear, Streamlined E-Commerce" />
  </div>
);

export default ProjectsContainer;
