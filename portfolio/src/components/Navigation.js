// import style sheet for Navigation
import '../styles/Navigation.css'
import React from 'react'

function Navigation ( {currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-links">
        <li className="nav-item">
            <a href="#about"
            onClick={() => handlePageChange('about')}
            className={currentPage === "about" ? "nav-link active" : "nav-link"}
            >
                About
            </a>
        </li>
      
    </ul>
  )
}

export default Navigation
