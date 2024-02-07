import React from 'react';
import Project from '../components/Project';
import projects from '../data/project.json';

function ProjectsGallery() {
  return (
    <div className="container mt-5">
      <h2>Project Gallery</h2>
      <p>Explore my past projects!</p>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-lg-3 col-md-4 col-sm-12 mb-4">
            <div className="card">
              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsGallery;

