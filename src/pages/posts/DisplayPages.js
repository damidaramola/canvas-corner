import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/DisplayPages.module.css";

function DisplayPages() {
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        <p>List of posts here</p>
      </Col>
      <Col md={2} className="d-none d-lg-block p-0 p-lg-2">
        add post
        bookmarked
        feed
        <p>categories</p>
      </Col>
    </Row>
  );
}

export default DisplayPages;