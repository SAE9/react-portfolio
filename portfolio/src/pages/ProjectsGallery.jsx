import React from 'react';
import Project from '../components/Project';
import projects from '../data/project.json';
import '../css/project.css';

function ProjectsGallery() {
  return (
    <div className="container mt-5">
      <h2>Project Gallery</h2>
      <p>Explore my past projects!</p>
      <div className="row">
        {projects.map((project) => {
            // console.log(project.images)
            return (
                <div key={project.id} className="col-lg-3 col-md-4 col-sm-12 mb-4">
                <div className="card">
                  <Project
                    title={project.title}
                    description={project.description}
                    images={project.images}
                    deployedLink={project.deployedLink}
                    github={project.github}
                  />
                </div>
              </div>
            )
        }

        )}
      </div>
    </div>
  );
}

export default ProjectsGallery;

