import './projectdisplay.css';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectDisplay = ({ project }) => {
    const [imageIndex, setImageIndex] = React.useState(0);

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % project.imageUrl.length);
    };

    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + project.imageUrl.length) % project.imageUrl.length);
    };

    return (
        <article className="project-display">
            <div className="project-image-container">
                <div>
                    {project.imageUrl.length > 1 && (
                        <button className="arrow-btn left-arrow" onClick={prevImage}>&lt;</button>
                    )}
                    
                    <img src={project.imageUrl[imageIndex]} alt={`Project image of ${project.title}`} className="project-image" />
                    
                    {project.imageUrl.length > 1 && (
                        <button className="arrow-btn right-arrow" onClick={nextImage}>&gt;</button>
                    )}
                </div>
            </div>
            <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className="technology-list">
                    {project.technologies.map((tech, index) => (
                        <li key={index} className="technology-item">{tech}</li>
                    ))}
                </ul>
                <div className="project-buttons">
                    <a href={project.githubUrl} className="project-btn" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub</a>
                    {project.liveDemoUrl && <a href={project.liveDemoUrl} className="project-btn" target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>Live Demo</a>}
                </div>
            </div>
        </article>
    );
};

ProjectDisplay.propTypes = {
    project: PropTypes.shape({
        imageUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        githubUrl: PropTypes.string.isRequired,
        liveDemoUrl: PropTypes.string
    })
};

export default ProjectDisplay;
