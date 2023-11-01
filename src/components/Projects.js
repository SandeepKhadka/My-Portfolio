import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const project1 = [
    {
      title: "Flipkart Clone",
      description: "MERN Project",
      imgUrl: projImg4,
      link: "https://github.com/SandeepKhadka/Flipkart_clone"
    },
    {
      title: "Multivendor Ecommerce Website",
      description: "PHP/Laravel, Python and MySQL",
      imgUrl: projImg5,
      link: "https://www.youtube.com/watch?v=qsWzE682_yA"
    },
    {
      title: "Real Estate Responsive Website",
      description: "React JS, Material UI",
      imgUrl: projImg6,
      link: "https://github.com/SandeepKhadka/React-Responsive-Real-Estate-Website"
    },
  ];

  const project2 = [
    {
      title: "Dice Game",
      description: "React JS, Chakra UI",
      imgUrl: projImg7,
      link: ""
    },
    {
      title: "Nepdoor",
      description: "PHP/Laravel and MySQL",
      imgUrl: projImg8,
      link: "https://github.com/SandeepKhadka/nepdoor"
    },
    {
      title: "Sysmeet",
      description: "PHP/Laravel and MySQL",
      imgUrl: projImg9,
      link: "https://github.com/SandeepKhadka/Sysmeet"
    },
  ];

  const project3 = [
    {
      title: "Dynamic Photofolio Website",
      description: "PHP/Laravel, Bootstrap and MySQL",
      imgUrl: projImg11,
      link: "https://github.com/SandeepKhadka/Portfolio"
    },
    {
      title: "Internship Management System",
      description: "PHP/Laravel and MySQL",
      imgUrl: projImg12,
      link: "https://github.com/SandeepKhadka/Internship-Management-System"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Throughout my career, I've had the privilege of working on a
                    variety of exciting projects that showcase my technical
                    prowess. From creating responsive e-commerce platforms to
                    developing innovative web solutions, my portfolio reflects a
                    commitment to excellence and innovation. These projects have
                    allowed me to demonstrate my skills in web development,
                    design, and problem-solving, while consistently delivering
                    top-notch results.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {project1.map((project, index) => {
                            return <ProjectCard key={index} {...project}/>;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center align-items-center">
                          {project3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
