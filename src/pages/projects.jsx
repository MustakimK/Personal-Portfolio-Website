import ProjectDisplay from '../components/projectdisplay.jsx';
import '../styles/projects.css';

const sampleProjects = [
    {
        id: 1,
        title: 'Personal Portfolio Website',
        description: 'My personal portfolio website.',
        imageUrl: ['./images/projects/websiteportfolio1.png', './images/projects/shell.png'], 
        technologies: ['Javascript', 'React', 'HTML', 'CSS', 'Vite'],
        githubUrl: 'https://github.com/MustakimK/mustakimk.github.io',
        liveDemoUrl: 'https://ilied.com'
    },
    {
        id: 2,
        title: 'Halal Scanner',
        description: 'Scans food products to determine if they are halal or not.',
        imageUrl: ['./images/IMG-20220629-WA0004'], 
        technologies: ['Kotlin', 'Android Studio', 'SQLite'],
        githubUrl: 'https://github.com/MustakimK/Halal-Scanner'
    },
    {
        id: 3,
        title: 'Simple Shell Interface',
        description: 'Simple shell interface that supports basic commands.',
        imageUrl: ['./images/projects/shell.png'], 
        technologies: ['C'],
        githubUrl: 'https://github.com/MustakimK/MKShell'
    },
    {
        id: 4,
        title: 'Rinvest',
        description: 'DeltaHacks Hackathon Project',
        imageUrl: ['./images/projects/rinvest1.png'], 
        technologies: ['Javascript', 'React', 'Firebase', 'CSS'],
        githubUrl: 'https://github.com/AsherHaroon/DeltaHacksProject'
    },
    {
        id: 5,
        title: 'Spy Network',
        description: 'Learned class inheritance and object-oriented programming in Java.',
        imageUrl: ['./images/projects/spygame.png'],
        technologies: ['Java'],
        githubUrl: 'https://github.com/MustakimK/Spy-Network-Communication-System'
    },
    {
        id: 6,
        title: 'Game Server Rolling Backup',
        description: 'Rolling back up for game save files using a docker container.',
        imageUrl: ['./images/projects/gameserverbackup.png'], 
        technologies: ['Python', 'Docker'],
        githubUrl: 'https://github.com/MustakimK/Game-Server-Rolling-Backup'
    },
    {
        id: 7,
        title: 'Derivative Calculator',
        description: 'Derivative calculator using Haskell.',
        imageUrl: ['./images/projects/derivativecalc.png'],
        technologies: ['Haskell'],
        githubUrl: 'https://github.com/MustakimK/Derivative-Calculator'
    },
    {
        id: 8,
        title: 'Multipurpose Discord Bot',
        description: 'Multipurpose discord bot',
        imageUrl: ['./images/home'],
        technologies: ['Javascript', 'Node'],
        githubUrl: 'https://github.com/MustakimK/Multipurpose-Discord-Bot'
    }
];

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            {sampleProjects.map((project) => (
                <ProjectDisplay key={project.id} project={project} />
            ))}
        </div>
    );
};
export default Projects;

