import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });
    
    //handles request for post and  will run code
    //when post id changes in the url
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data:post}] = await PromiseRejectionEvent.call([
                    axiosReq.get(`/posts/${id}`)
                ])
                setPost({results: [post]})
                console.log(post)
            } catch (err) {
                console.log(err)
            }
        };
      handleMount();  
    }, [id])

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
            <Post
                {...post.results[0]} setPosts={setPost}
                PostPage
                />
                <Container className={appStyles.Description}>
                    Comments
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">

            </Col>
        </Row>
    );
}

export default PostPage;