import React from 'react';
function Project(props) {
    // Body
    return <div className="project-card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="links">
            <a href={deployedLink} target="_blank" rel='noopener noreferrer'>Deployed Link</a>
            <a href={github} target="_blank" rel='noopener noreferrer'>Github Link</a>
        </div>
        <img src={image} alt={title} className="image" />

    </div>
}

export default Project;