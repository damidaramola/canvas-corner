import React from 'react';
import styles from '../../styles/Post.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Badge, Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';


const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        created_at,
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
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner


    return <Card className={styles.Post}>
        <Card.Body>
            <Media className='align-items-center justify-content-between'>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} />
                    {owner}
                </Link>
                <div className='d-flex align-items-center'>
                    <span>
                        {updated_at}
                        {is_owner && postPage && '...'}

                    </span>
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

            <div className={styles.PostBar}>

                {/* prevents users from liking their own posts */}
                {is_owner ? (
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>You can't like your own post!</Tooltip>}
                    >
                        <i className="far fa-heart" />
                    </OverlayTrigger>
                ) : like_id ? (
                    <span onClick={() => { }}>
                        <i className={`fas fa-heart ${styles.Heart}`} />
                    </span>
                ) :
                    currentUser ? (
                        <span onClick={() => { }}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>
                    ) :
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
                        <i className="fa-regular fa-bookmark" />
                    </OverlayTrigger>
                ) : bookmark_id ? (
                    <span onClick={() => { }}>
                        <i className={`fa-regular fa-bookmark ${styles.Bookmark}`} />
                    </span>
                ) :
                    currentUser ? (
                        <span onClick={() => { }}>
                            <i className={`fa-regular fa-bookmark ${styles.BookmarkOutline}`} />
                        </span>
                    ) :
                        (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Log in to bookmark posts!</Tooltip>}
                            >
                                <i className="fa-regular fa-bookmark" />
                            </OverlayTrigger>
                        )}

            </div>
        </Card.Body>
    </Card>
}

export default Post