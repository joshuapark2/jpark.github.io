import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import jpark from "../assets/img/trans1.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/icons8-github-250.png';
import resumeLink from '../assets/img/icons8-link-100.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 

  return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
            <img src={jpark} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/joshuapark1309/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/joshuapark2" target="_blank"><img src={github} alt="" /></a>
                <a href="https://docs.google.com/document/d/1p1un83i0TpFUB_ncoDJWvsXdvM_hMlBs_uL7KxNpI0U/edit?usp=sharing" target="_blank"><img src={resumeLink} alt="" /></a>
            </div>
            <button className="vvd"><span>Let’s Connect</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
