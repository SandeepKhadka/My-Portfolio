import { Col, Row, Alert } from "react-bootstrap";

export const Quotes = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  };

  const quoteStyle = {
    fontSize: "50px",
    textAlign: "center",
    backgroundImage:
      "-webkit-linear-gradient(50deg, #f00, #f90, #ff0, #0f0, #00f, #90f, #f00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  

  const authorStyle = {
    fontStyle: "italic",
    textAlign: "right",
    fontSize: "16px",
    color: "black",
    backgroundImage:
      "-webkit-linear-gradient(#f06, #f90, #f60",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" style={containerStyle}>
        <div>
          <p style={quoteStyle}>
            "Java is to JavaScript what car is to carpet"
          </p>
          <p style={authorStyle}>- Chris Heilmann</p>
        </div>
      </div>
    </Col>
  );
};
