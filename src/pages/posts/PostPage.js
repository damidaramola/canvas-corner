import React, { useEffect, useState } from "react";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { fetchMoreData } from "../../utils/utils";
import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    //handles api request for post and  will run code
    //when post id changes in the url
    useEffect(() => {
        const handleMount = async () => {
            try {
                // api request for posts to be shown
                const [{ data: post }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                    // will fetch post comments
                    axiosReq.get(`/comments/?post=${id}`)
                ]);
                setPost({ results: [post] });
                setComments(comments)
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id])

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Post
                    {...post.results[0]} setPosts={setPost}
                    postPage />
                {/* add comment form */}
                <Container className={appStyles.Description}>
                    {currentUser ? (
                        <CommentCreateForm
                            profile_id={currentUser.profile_id}
                            profileImage={profile_image}
                            post={id}
                            setPost={setPost}
                            setComments={setComments}
                        />
                    ) : comments.results.length ? (
                        "Comments"
                    ) : null}
                    {comments.results.length ? (
                         <InfiniteScroll
                         children={comments.results.map((comment) => (
                           <Comment
                             key={comment.id}
                             {...comment}
                             setPost={setPost}
                             setComments={setComments}
                           />
                         ))}
                         dataLength={comments.results.length}
                         loader={<Asset spinner />}
                         hasMore={!!comments.next}
                         next={() => fetchMoreData(comments, setComments)}
                       />
                    ) : currentUser ? (
                        <span>No comments yet, be the first to comment!</span>
                    ) : (
                        <span>No comments... yet</span>
                    )}

                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">

            </Col>
        </Row>
    );
}

export default PostPage;