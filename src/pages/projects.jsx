import ProjectDisplay from '../components/projectdisplay.jsx';
import '../styles/projects.css';


// Sample data for projects
const sampleProjects = [
    {
        id: 1,
        title: 'Personal Portfolio Website',
        description: 'My personal portfolio website.',
        imageUrl: './images/home', 
        technologies: ['Javascript', 'React', 'HTML', 'CSS', 'Vite'],
        githubUrl: 'https://github.com/username/car-rental',
        liveDemoUrl: 'https://ilied.com'
    },
    {
        id: 2,
        title: 'Halal Scanner',
        description: 'Scans food products to determine if they are halal or not.',
        imageUrl: './images/IMG-20220629-WA0004', 
        technologies: ['Kotlin', 'Android Studio', 'SQLite']
    },
    {
        id: 3,
        title: 'Simple Shell Interface',
        description: 'Simple shell interface that supports basic commands.',
        imageUrl: './images/IMG-20220629-WA0004', 
        technologies: ['C']
    },
    {
        id: 4,
        title: 'Rinvest',
        description: 'DeltaHacks Hackathon Project',
        imageUrl: './images/home', 
        technologies: ['Javascript', 'React', 'Firebase', 'CSS'],
        githubUrl: 'https://github.com/AsherHaroon/DeltaHacksProject'
    },
    {
        id: 5,
        title: 'Spy Network',
        description: 'Learned class inheritance and object-oriented programming in Java.',
        imageUrl: './images/home',
        technologies: ['Java']
    },
    {
        id: 6,
        title: 'Game Server Rolling Backup',
        description: 'Rolling back up for game save files using a docker container.',
        imageUrl: './images/home', 
        technologies: ['Python', 'Docker'],
        githubUrl: 'https://github.com/MustakimK/Game-Server-Rolling-Backup'
    },
    {
        id: 7,
        title: 'Derivative Calculator',
        description: 'Derivative calculator using Haskell.',
        imageUrl: './images/home',
        technologies: ['Haskell']
    }
];

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            {sampleProjects.map((project, index) => (
                <ProjectDisplay key={project.id} project={project} isRightAligned={index % 2 !== 0} />
            ))}
        </div>
    );
};

export default Projects;
