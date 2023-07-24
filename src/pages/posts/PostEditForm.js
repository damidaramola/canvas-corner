import React, { useEffect, useRef, useState } from "react";

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
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {

    // logic which stores and updates state
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
    });


    const { title, description, category, image } = postData;

    const imageInput = useRef(null)
    const history = useHistory()
    const { id } = useParams(); // gets id parameter from url

    //gets post data for editing and prevents editing other users posts 
    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const { title, description, image, is_owner, category } = data;
                is_owner ? setPostData({ title, description, image, category }) : history.push("/");
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [history, id]);

    // handle's input changes in form
    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    //handles uploaded images 
    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)

        // check if imageinput element has a file in it 
        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        //handles form submission of the posts
        //posts form data to posts endpoint of API
        try {
            await axiosReq.put(`/posts/${id}`, formData)
            history.push(`/posts/${id}`)
        } catch (err) {
            console.log(err)
            if (errors.response?.status !== 401) {
                setErrors(err.response?.data)
            }
        }
    }

    // this text field holds fields and cancel &create buttons
    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as='textarea'
                    name='description'
                    rows={6}
                    value={description}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                {/* create field for user to choose category level */}
                <Form.Label>Category</Form.Label>
                <Form.Control
                    as="select"
                    name="category"
                    className={appStyles.Input}
                    value={category}
                    onChange={handleChange}
                    aria-label="category"
                >
                    <option>Select Skill level</option>
                    <option value="novice">Novice</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="professional">Professional</option>
                </Form.Control>
            </Form.Group>
            {errors?.category?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}




            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                create
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Description} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        {/* Upload or update images  */}
                        <Form.Group className="text-center">
                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image}
                                            src={image}
                                            rounded
                                        />
                                    </figure>

                                    <div>
                                        <Form.Label
                                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                            htmlFor='image-upload'
                                        >
                                            Change image
                                        </Form.Label>
                                    </div>

                                </>
                            ) : (<Form.Label
                                className="d-flex justify-content-center"
                                htmlFor="image-upload">

                                <Asset
                                    src={Upload}
                                    message="Click or tap to upload a picture"
                                />
                            </Form.Label>)}

                            <Form.File
                                id='image-upload'
                                accept='image/*'
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />

                        </Form.Group>
                        {errors?.title?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Description}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostEditForm;