import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/instabot.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Digitian Hub"
              description="An Online B2B Marketplace which solves the trust issues between client and Agencies and secures the money and time. All in One Platform to folder the projects and find/get projects.
                            Clients and can raise projects without any hassle, and Digitian Hub would take care of the work by the Agencies as per the proposal and timelines. Agency can find projects."
              link="https://www.digitianhub.online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Instagram Bot"
              description="A Selenium Instagram Bot Developed in Python, which fetches the India's Top food blogger's Details and analysis the insights, like hashtag count, likes, common phrases, reach and video V/S image count. Follows/Unfollows the Accounts, Likes and Dislikes the images, and scrap the data from the food bloggers account."
              link="https://github.com/Ritish-Madan/Instagram-Bot-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Codeial - Media"
              description="Secure Backend for Socia Media Website build in NodeJS and ExpressJS. Have used ejs for the immediate styling, and built the database models using mongoose and used MongoDB as primary database. Used OAuth, Manual Authentication and PassportJS for Authentication. Built the Magic link and OTP model, for secure password reset. "
              link="https://github.com/Ritish-Madan/Codial-Media"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
