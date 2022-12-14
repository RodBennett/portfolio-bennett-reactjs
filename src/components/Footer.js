// import github from '../images/github.png'
// import linkedin from '../images/linkedin.png'
import '../styles/Footer.scss'

// IMPORT FONTAWESOME ICONS INTO REACT
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <a className="github-icon" href="https://github.com/RodBennett" target="blank">
        <i><FaGithub/></i>
        </a>
        <a className="linkedin-icon" href="https://www.linkedin.com/in/rod-bennett-00b1a020a/" target="blank">
        <i><FaLinkedin /></i>
        </a>

    </footer>
  )
}

export default Footer
