import {Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/js.png";
import bootstrap from "../assets/img/bootstrap.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import cSharp from "../assets/img/Csharp.png";
import php from "../assets/img/php.png";
import react from "../assets/img/react.png";
import jQuery from "../assets/img/jquery.png";
import js from "../assets/img/js.png";
import github from "../assets/img/github.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                        Technologies I've worked with
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={cSharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={jQuery} alt="Image" />
                                <h5>jQuery</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>Github</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}