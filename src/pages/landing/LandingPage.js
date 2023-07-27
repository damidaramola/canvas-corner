import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingPageImage from "../../assets/landing-image.avif";
import styles from "../../styles/LandingPage.module.css";
import btnStyles from "../../styles/Button.module.css";

const LandingPage = () => {
    return (
        <>
            <Row className="text-center">
                <Col sm={12}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="mb-4">CanvasCorner - Get started</h1>
                                </Card.Title>
                                <Card.Text className="font-weight-bold">
                                    CanvasCorner is a photo-sharing content platform for artists who love to paint. 
                                    You can share your artwork with many passionate artists and gain inspiration for your 
                                    future master pieces!
                                    <br />
                                    <br />
                                    Post and Paint your way to success by joining us!
                                </Card.Text>
                            </Card.Body>
                            <img
                                src={landingPageImage}
                                className={styles.LandingPageImage}
                                alt="Person photographing a plate with food"
                            />
                            <Card.Body>
                                <Link to="/signup">
                                    <Button
                                        className={`${btnStyles.Button} ${styles.ButtonMargin} mb-3`}
                                    >
                                        Join now!
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button className={`${btnStyles.Button} mb-3`}>
                                        I’m an existing member, log me in!
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </>
    );
};

export default LandingPage;
