import '../styles/Header.scss'

function Navigation ( {currentPage, handlePageChange }) {

  return (
    <header>
    <nav>
    <ul className="list">
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
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
            >
                Portfolio
            </a>
        </li>
        <li className="nav-item">
            <a href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === "contact" ? "nav-link active" : "nav-link"}
            >
                Contact
            </a>
        </li>
        <li className="nav-item">
            <a href="#portfolio"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === "resume" ? "nav-link active" : "nav-link"}
            >
                Resume
            </a>
        </li>
    </ul>
    </nav>
    </header>
  )
}

export default Navigation
