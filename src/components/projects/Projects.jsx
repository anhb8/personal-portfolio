import React from "react";
import './Projects.css';
import { Nav, Tab, TabContainer, Row, Col, Container  } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/project-img1.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';

const Projects = () => {
    const projects = [
        {
            title: "Tic-Tac-Toe",
            description:"",
            imgUrl: projImg1,
        },
        {
            title: "Tic-Tac-Toe",
            description:"",
            imgUrl: projImg1,
        },
        {
            title: "Tic-Tac-Toe",
            description:"",
            imgUrl: projImg1,
        },
        {
            title: "Tic-Tac-Toe",
            description:"",
            imgUrl: projImg1,
        },
        {
            title: "Tic-Tac-Toe",
            description:"",
            imgUrl: projImg1,
        },
        {
            title: "Tic-Tac-Toe",
            description:"",
            imgUrl: projImg1,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility> 
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>Project A ....</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
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
                            <Row>
                                    {
                                        projects.map((project,index) => {
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
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}

export default Projects;