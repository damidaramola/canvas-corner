import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    const [signUpData , setSignUpData] = useState({
        username:"",
        password1:"",
        password2:"",
    });

    const {username, password1, password2} = signUpData;

    // will handle changes when info is added to any input field
    const handleChange = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value, //key is input name and value is user value
        });
      };
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign up</h1>
                    <Form>
                        <Form.Group controlId="Username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder="username"
                                name="username" 
                                value={username}
                                onChange={handleChange}
                                />

                        </Form.Group>

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button 
                        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                         type="submit">
                            Submit
                        </Button>
                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
                    </Link>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={
                        "#"
                    }
                />
            </Col>
        </Row>
    );
};

export default SignUpForm;