import ProjectData from '../data/ProjectData.json';
import { useSelector } from 'react-redux';

const Projects = () => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <div className='projects'>
            <ul className='project-container'>
                {ProjectData.projects.map((project, index) => (
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`card-link ${theme}`}
                        key={index}
                    >
                        <div className={`cards ${theme}`}>
                            <h3 style={{marginTop: '28px'}}>{project.title}</h3>
                            <p>{project.description}</p>
                            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                            <p><strong>Tool:</strong> {project.tool}</p>
                            <p><strong>Type:</strong> {project.type}</p>
                        </div>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Projects;