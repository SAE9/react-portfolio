import React from 'react';

const Project = ({ title, image, description, deployedLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="project-links">
          <button className="btn btn-primary mr-2" onClick={() => window.open(deployedLink, '_blank')}>
            Deployed Version
          </button>
          <button className="btn btn-secondary" onClick={() => window.open(githubLink, '_blank')}>
            GitHub Repository
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;


