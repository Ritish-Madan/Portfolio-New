import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer @ Google"
              date="January, 2022 - Present"
              content={[
              ]}
            />
            <Resumecontent
              title="Software Intern @ Falkonry"
              date="October, 2021 - Present"
              content={[
              ]}
            />
            <Resumecontent
              title="Software Developer @ Digitian Hub Pvt. Ltd."
              date="January, 2021 - October, 2021"
              content={[
                "Creating the REST API of Authentication and Dashboard Authorization.",
                "Creating the Dynamic Front-End in ReactJS.",
                "Handling the Database, and integrating the Front-End with Backend.",
                "Deploying the Web Application and optimising the production build of Backend.",
                "Building the strategy for the development operations.",
                "Leading the development team and managing the project.",
                "Authorized Dashboard for Both user roles for better engagement, and taking care of User Experience.",
                "Added Notifications using sockets to the dashboards",
                "Added system enabled notifications, throught admin panel"
              ]}
            />
            <Resumecontent
              title="Technical Intern @ Stupa Sports Analytics"
              date="May, 2021 - July, 2021"
              content={[
                "Analysed the Table Tennis Dataset.",
                "Reported Non-Normalized data and insights in the data.",
                "Cleaning the Dataset and Plotting the Insights",
                "Code migration from MySQL to Python for better performance.",
                "Optimised the code performance and delivered optimised approach for the problems.",
              ]}
            />
            <Resumecontent
              title="Teaching Assistant @ Coding Ninjas"
              date="August, 2020 - December, 2020"
              content={[
                "Mentored the Students Enrolled in Data Science and Machine Learning Course.",
                "Evaluated the Projects of students like Neural Machine Translation, Driver Distraction Detection, Test Generation and Cifar Dataset prediction. ",
                "Fixed the Technical Bugs and issues of students enrolled in the course.",
                "Solving Students doubts improving in debugging skills.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech - Computer Science Engineering [PIET, Panipat] "
              date="2018 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />

            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Finalists in Toykathon"
              content={[
                "Finalists in the National Level Hackathon organized by MHRD, built the Mobile Application for the kids to make the learning more intuitive and fun.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
