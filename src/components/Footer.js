import { Container, Row, Col } from "react-bootstrap";
import jpark2 from "../assets/img/Jpark-logos_transparent.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/icons8-github-250.png';
import resumeLink from '../assets/img/icons8-link-100.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={jpark2} alt="Icon" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" >
              <a href="https://www.linkedin.com/in/joshuapark1309/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/joshuapark2" target="_blank"><img src={github} alt="" /></a>
              <a href="https://docs.google.com/document/d/1p1un83i0TpFUB_ncoDJWvsXdvM_hMlBs_uL7KxNpI0U/edit?usp=sharing" target="_blank"><img src={resumeLink} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}