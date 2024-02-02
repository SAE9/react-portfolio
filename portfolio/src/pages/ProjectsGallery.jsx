import React from 'react';
import Project from '../components/project';
import projects from '../data/project.json';

function ProjectsGallery() {
    // Body
    return <div>
        This is list of my past projects
        <div>
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />;
            })}
        </div>
    </div>
}

export default ProjectsGallery;