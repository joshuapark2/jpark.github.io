import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import portfolioV1 from "../assets/img/PortfolioV1.png";
import chatBox from "../assets/img/chatbot.png";
import snakegif from "../assets/img/snakegif.gif";
import roboFriends from "../assets/img/robofriends.png";

export const Projects = () => {
    const projects = [
        {
          title: "Food Ordering App",
          description: "Design & Development",
          imgUrl: projImg1,
          proj: "https://joshuapark2.github.io/robofriends/",
          repo: "https://github.com/joshuapark2/robofriends",
        },
        {
          title: "Portfolio V1",
          description: "Design & Development",
          imgUrl: portfolioV1,
          proj: "https://joshuapark2.github.io/robofriends/",
          repo: "https://github.com/joshuapark2/robofriends",
        },
        {
          title: "RoboFriends",
          description: "Design & Development",
          imgUrl: roboFriends,
          proj: "https://joshuapark2.github.io/robofriends/",
          repo: "https://github.com/joshuapark2/robofriends",
        },
        {
          title: "Snake",
          description: "Design & Development",
          imgUrl: snakegif,
          proj: "https://joshuapark2.itch.io/snake?secret=mtBfNNQ5qSwhryvtRjQqyPU4Y9M",
          repo: "https://github.com/joshuapark2/snakeGame",
        },
        {
          title: "Chatbot",
          description: "Design & Development",
          imgUrl: chatBox,
          proj: "https://joshuapark2.github.io/chatbot/",
          repo: "https://github.com/joshuapark2/chatbot",
        },
        {
          title: "WIP",
          description: "Design & Development",
          imgUrl: projImg3,
          proj: "https://joshuapark2.github.io/robofriends/",
          repo: "https://github.com/joshuapark2/robofriends",
        },
      ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects and Informational</h2>
                        <p>Below you'll see my works, about page, and where you can contact me.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">All Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">About Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Contact Me</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                     key={index}
                                                     {...project}
                                                     />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                 <p>I am a Georgia Tech student and Full Stack Web Developer. 
                                    The main appeal of becoming a web developer is that I can delve into a 
                                    life-long journey of learning the technical skills of frontend/backend 
                                    and engaging with different problems every day. Similarly, as someone with 
                                    an artistic background, technical and problem-solving abilities are needed 
                                    to create a coherent painting. Taking portrait painting as an example and 
                                    relating to the field of computer science, there are rules of knowing the 
                                    planes of the face and how the language of code works. However, we can create 
                                    thousands of different looks and websites within those rules.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <section>
								<p>Email</p>
								<p><a href="mailto:joshuapark1309@gmail.com" target="_blank">joshuapark1309@gmail.com</a></p>
							    </section>
                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}