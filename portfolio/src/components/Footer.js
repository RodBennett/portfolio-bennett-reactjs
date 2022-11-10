// import github from '../images/github.png'
// import linkedin from '../images/linkedin.png'
// import '../styles/Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='footer-container'>
        <a className="github-icon" href="https://github.com/RodBennett">
        <i><FaGithub /> </i>
        </a>
        <a className="linkedin-icon" href="#">
        <i><FaLinkedin /> </i>
        </a>
    
    </div>
  )
}

export default Footer
