import React, { useState } from 'react';
import styles from '../../styles/Post.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Badge, Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { axiosRes } from '../../api/axiosDefaults';
import { MenuDropdown } from '../../components/MenuDropdown';
import Alerts from '../../components/Alerts';

const Post = (props) => {
    const {
        id, 
        owner,
        profile_id,
        profile_image,
        updated_at,
        like_id,
        bookmark_id,
        title,
        description,
        category,
        image,
        comments_count,
        likes_count,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const [showAlert, setShowAlert] = useState(false);

    const history = useHistory();

    // holds id of post user wants to edit
    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };

    //allows user to delete a post
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            setShowAlert(true);
            setTimeout(function () {
                history.push("/");
            }, 1500);
        } catch (err) {
            // console.log(err);
        }
    };

    // allows users to like posts
    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post('/likes/', { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    // allows users to un-like posts
    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}`, { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    // allows users to bookmark posts
    const handleBookmark = async () => {
        try {
            const { data } = await axiosRes.post('/bookmarks/', { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, bookmark_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    // allows users to remove bookmark
    const handleRemoveBookmark = async () => {
        try {
            await axiosRes.delete(`/bookmarks/${bookmark_id}`, { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, bookmark_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };


    return (
        <Card className={styles.Post}>
            {showAlert && (
                <Alerts variant="info" message="This post has been deleted" />
            )}
            <Card.Body>
                <Media className='align-items-center justify-content-between'>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image}
                            height={55} />
                        {owner}
                    </Link>
                    <div className='d-flex align-items-center'>
                        <span>{updated_at}</span>
                        {is_owner && postPage && (<MenuDropdown handleEdit={handleEdit}
                            handleDelete={handleDelete} />)}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {title && <Card.Title className='text-centre'> </Card.Title>}
                {description && <Card.Text> {description}</Card.Text>}

                {/* badges display the skill level of artists */}
                <Card.Text>
                    Skill level:
                    <Badge variant="secondary" className={styles.PostBadge}>
                        {category}
                    </Badge>
                </Card.Text>

                {/* this div contains like comments and bookmark icons */}
                <div className={styles.PostBar}>

                    {/* prevents users from liking their own posts */}
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                        // user has liked post if like id exists
                    ) : like_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>
                    ) :
                        //  check if user is logged in/exists 
                        currentUser ? (
                            <span onClick={handleLike}>
                                <i className={`far fa-heart ${styles.HeartOutline}`} />
                            </span>
                        ) :

                            // display like icon for user who isn't logged in 
                            (
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Log in to like posts!</Tooltip>}
                                >
                                    <i className="far fa-heart" />
                                </OverlayTrigger>
                            )}

                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}

                    {/* prevents users from bookmarking their own posts */}
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't bookmark your own post!</Tooltip>}
                        >
                            <i className={`fa-regular fa-bookmark ${styles.Bookmark}`} />
                        </OverlayTrigger>
                    ) : bookmark_id ? (
                        <span onClick={handleRemoveBookmark}>
                            <i className={`fa-solid fa-bookmark ${styles.Bookmark}`} />
                        </span>
                    ) :
                        currentUser ? (
                            <span onClick={handleBookmark}>
                                <i className={`fa-regular fa-bookmark ${styles.Bookmark} ${styles.BookmarkOutline}`} />
                            </span>
                        ) :
                            (
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Log in to bookmark posts!</Tooltip>}
                                >
                                    <i className={`fa-regular fa-bookmark ${styles.Bookmark}`} />
                                </OverlayTrigger>
                            )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;