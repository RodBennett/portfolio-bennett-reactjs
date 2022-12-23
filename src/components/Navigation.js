import "../styles/Navbar.scss"

import { Navbar, Nav, Row, Container, NavDropdown } from "react-bootstrap"

export default function Navigation({ currentPage, handlePageChange }) {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                
                    <Nav.Link href="#about" onClick={() => handlePageChange("About")}>
                        <Navbar.Brand className="brand">Rod Bennett</Navbar.Brand>
                    </Nav.Link>                                           

                    <Nav className="link-list link-list-item">
                    <Nav.Link href="#about"
                        onClick={() => handlePageChange("About")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>

                    </Nav.Link>
                    <Nav.Link href="#portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                        className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link href="#contact"
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Nav.Link>
                    <Nav.Link href="#resume"
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        Resume
                    </Nav.Link>
                    </Nav>
            </Navbar>
        </>
    );
}
