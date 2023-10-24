import React from "react";
import './about.css'
import { Nav, Tab, TabContainer, Row, Col, Container  } from "react-bootstrap";
import 'animate.css';

const About = () => {
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <p>I'm Alina Nguyen, a Computer Science graduate student specializing in Artificial Intelligence, set to graduate in May 2024. I'm passionate about AI, a problem-solving enthusiast, and a dedicated learner.</p>
                    </Col>
                </Row>
            </Container>
        </section>    
    )
}

export default About