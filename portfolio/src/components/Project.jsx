import React from 'react';

const Project = ({ title, image, description, deployedLink, github }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="project-links d-flex justify-content-between">
          <button className="btn btn-success mr-2" onClick={() => window.open(deployedLink, '_blank')}>
            Deployed Version
          </button>
          <button className="btn btn-success" onClick={() => window.open(github, '_blank')}>
            GitHub Repository 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;


