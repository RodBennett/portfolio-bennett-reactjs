// import Github icon
import { FaGithub } from 'react-icons/fa'

// import styles
import '../styles/Project.scss'

const Project = ({ projects }) => {
    return (
        <div className='project-container'>
            {projects.map((project) => (
            <a className="project-card" href={`${project.link}`} target='blank' key={project.id}>
                <header className='project-header'>
                    <h4 className='project-text'>{`${project.title}`}</h4>
                    <a className='github' href={`${project.github}`} target='blank'>
                        <FaGithub /></a></header>
                <img className="image" src={`${project.image}`} alt="hikamp"></img>
                <div className="project-footer"><strong className='description'>Description</strong>
                <div className="footer-description">{`${project.desc}`}</div>
                </div>
            </a>

            ))}
        </div>
    )
}

export default Project
