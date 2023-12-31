import React, { useState } from "react";
import axios from "axios";
import { Alert, Form, Button, Image, Col, Row, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";
import signInPageImage from "../../assets/sign-up-image.jpg";

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",

    });

    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();


    // handles submit button for successful signing in  and posts to API endpoint  
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user);
            setTokenTimestamp(data);
            history.push("/");

        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    // will handle changes when info is added to any input field
    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto p-0 p-md-2" md={6}>
                <Container className={`${appStyles.Description} p-4 `}>
                    <h1 className={styles.Header}>sign in</h1>

                    {/* form which will handle data input */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />

                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group controlId="password">

                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Wide} `}
                            type="submit"
                           
                            >
                            Sign In
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert variant="warning" key={idx} className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>
                <Container className={`mt-3 ${appStyles.Description}`}>
                    <Link className={styles.Link} to="/signup">
                       <h5> Don't have an account? <span>Sign up now!</span> </h5>
                    </Link>
                </Container>
                
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={signInPageImage}
                />
            </Col>
        </Row>
    );
}

export default SignInForm;