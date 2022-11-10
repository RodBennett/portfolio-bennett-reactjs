// import style sheet for Navigation
// import '../styles/Header.css'
import '../styles/Navigation.scss'
import React from 'react'


function Navigation ( {currentPage, handlePageChange }) {
    
  return (
    <ul className="header">
        <li className="nav-item">
            <a href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
        
            >
                About Me
            </a>
        </li>
        <li className="nav-item">
            <a href="#portfolio"
            onClick={() => handlePageChange('portfolio')}
            className={currentPage === "portfolio" ? "nav-link active" : "nav-link"}
            >
                Portfolio
            </a>
        </li>
        <li className="nav-item">
            <a href="#contact"
            onClick={() => handlePageChange('contact')}
            className={currentPage === "contact" ? "nav-link active" : "nav-link"}
            >
                Contact
            </a>
        </li>
        <li className="nav-item">
            <a href="#portfolio"
            onClick={() => handlePageChange('resume')}
            className={currentPage === "resume" ? "nav-link active" : "nav-link"}
            >
                Resume
            </a>
        </li>
    </ul>
  )
}

export default Navigation
