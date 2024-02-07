import React from 'react';

const Project = ({ title, image, description, deployedLink, githubLink }) => {
  return (
    <div className="project-card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt={title} className="project-image" />
      <p>{description}</p>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Version</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
      
    </div>
  );
};

export default Project;
