import React from 'react';
import Project from '../components/project';
import projects from '../data/project.json';

function ProjectsGallery() {
    // Body
    return <div className="container" >
        <h2>Project Gallery</h2>
        <p>Explore my past projects!</p>
        <div className="card">
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} image={project.image} deployedLink={project.deployedLink} github={project.github}/>;
            })}
        </div>
    </div>
}

export default ProjectsGallery;