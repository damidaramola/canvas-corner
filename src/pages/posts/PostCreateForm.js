import React, { useState } from "react";

import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {

  // logic which stores and updates state
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
  });
  
  const { title, description, category, image } = postData;

  const handleChange = (event) =>{
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // this text field holds cancel and create buttons
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          name='title'
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          name='description'
          rows={6}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          className={appStyles.Input}
          value={category}
          onChange={handleChange}
          aria-label="category"
        >
          <option>Select artistry level</option>
          <option value="Novice">Novice</option>
          <option value="Intermediate">intermediate</option>
          <option value="Professional">Professional</option>
        </Form.Control>
      </Form.Group>



      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => { }}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Description} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">

              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset
                  src={Upload}
                  message="Click or tap to upload a picture" />
              </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;