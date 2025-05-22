import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './styles/NavbarComponent.css';

function NavbarComponent() {
    return (
        <Navbar expand="lg" fixed="top" style={{background:"945678"}}>
            <Navbar.Brand href="/">My Personel Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                    <Link to="home" smoothe={true} duration={500} offset={-50} className="nav-link" style={{ cursor: 'pointer' }}>Home</Link>
                    <Link to="about" smoothe={true} duration={500} offset={-50} className="nav-link" style={{ cursor: 'pointer' }}>About Me</Link>
                    <Link to="skills" smoothe={true} duration={500} offset={-50} className="nav-link" style={{ cursor: 'pointer' }}>Skills</Link>
                    <Link to="portfolio" smoothe={true} duration={500} offset={-50} className="nav-link" style={{ cursor: 'pointer' }}>Portfolio</Link>
                    <Link to="contact" smoothe={true} duration={500} offset={-50} className="nav-link" style={{ cursor: 'pointer' }}>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;