import { Col, Row } from "react-bootstrap";
import "./Quotes.css";

export const Quotes = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  };

  const quoteStyle = {
    // fontSize: "50px",
    textAlign: "center",
    backgroundImage:
      "-webkit-linear-gradient(50deg, #f00, #f90, #ff0, #0f0, #00f, #90f, #f00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const authorStyle = {
    fontStyle: "italic",
    textAlign: "right",
    // fontSize: "8px",
    color: "black",
    backgroundImage: "-webkit-linear-gradient(#f06, #f90, #f60",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Row>
      <Col lg={12} md={12} sm={12}>
        <div className="newsletter-bx wow slideInUp" style={containerStyle}>
          <div>
            <p className="quote">
              "Java is to JavaScript what car is to carpet"
            </p>
            <p style={authorStyle}>- Chris Heilmann</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};
