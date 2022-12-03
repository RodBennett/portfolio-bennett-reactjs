import Project from '../Project'
import '../../styles/Project.scss'
import projects from '../../projects'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2 className='section-header'>Portfolio: Hover over headers to see GitHub repositories</h2>
      <Project projects={projects}/>
    </div>
  )
}

export default Portfolio
