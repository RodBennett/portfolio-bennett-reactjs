import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import '../styles/Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='footer-container'>
        <i><FaGithub /> </i>
        <i><FaLinkedin /> </i>
        <a className="github-icon" href="https://github.com/RodBennett">
      <img src={github} alt="Github Icon" />
      </a>
      <a className="linkedin-icon" href="#">
      <img src={linkedin} alt="Linkedin Logo" />
      </a>
    </div>
  )
}

export default Footer
