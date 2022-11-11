// import github from '../images/github.png'
// import linkedin from '../images/linkedin.png'
import '../styles/Footer.css'

// IMPORT FONTAWESOME ICONS INTO REACT
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <a className="github-icon" href="https://github.com/RodBennett" target="blank">
        <i><FaGithub /></i>
        </a>
        <a className="linkedin-icon" href="#" target="blank">
        <i><FaLinkedin /></i>
        </a>
    
    </div>
  )
}

export default Footer
