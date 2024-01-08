import React from "react";
import { Navbar, Nav} from "react-bootstrap";

function Header() {
    return (
        <Navbar expand="md" sticky="top" bg="dark" data-bs-theme="dark" className="fs-5 navbar" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto ">
                    <Nav.Link className="me-5" href="#top" > Home</Nav.Link>
                    <Nav.Link className="me-5" href="#about" > About</Nav.Link>
                    <Nav.Link className="me-5" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="me-5" href="#blog">Blog</Nav.Link>
                    
                    
                </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header