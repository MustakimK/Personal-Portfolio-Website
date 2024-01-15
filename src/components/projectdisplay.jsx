import './ProjectDisplay.css';
import PropTypes from 'prop-types';

const ProjectDisplay = ({ project, isRightAligned }) => {
    const alignmentClass = isRightAligned ? 'right-aligned' : 'left-aligned';

    return (
        <article className={`project-display ${alignmentClass}`}>
            <div className="project-image-container">
                <img src={project.imageUrl} alt={`Project image of ${project.title}`} className="project-image" />
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
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        githubUrl: PropTypes.string.isRequired,
        liveDemoUrl: PropTypes.string
    }),
    isRightAligned: PropTypes.bool.isRequired
};

export default ProjectDisplay;
