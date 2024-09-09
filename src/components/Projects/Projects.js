import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import twitter from "../../Assets/Projects/twitter.png";
import netflix from "../../Assets/Projects/netflix.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="This application allows you to listen to music and is built using HTML5, CSS3, and JavaScript. It is fully dynamic, enabling you to interact with the app seamlessly. You can easily increase or decrease the music volume to suit your preference.
              The music player features a user-friendly interface that allows you to play songs with just a click.You can also pause giving you complete control over your music playback."
              ghLink="https://github.com/Nikhilesh0231/spotifyclone"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter UI Clone"
              description="Twitter UI Clone This project is a clone of the Twitter user interface built using HTML and Tailwind CSS. It aims to replicate the main features and layout of the Twitter web application. Technologies Used HTML Tailwind CSS This project was inspired by the Twitter web application. Special thanks to the Tailwind CSS team for their amazing utility-first CSS framework."
              ghLink="https://github.com/Nikhilesh0231/twitter-UI-Clone-"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix UI Clone"
              description="The Netflix UI Clone replicates the basic layout and design of Netflix's home page. It is built using HTML for the structure and CSS for styling. "
              ghLink="https://github.com/Nikhilesh0231/Netflix-clone"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
