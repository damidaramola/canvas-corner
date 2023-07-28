import React, { useState } from 'react'
import styles from '../../styles/Comment.module.css';
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { MenuDropdown } from '../../components/MenuDropdown';
import { axiosRes } from '../../api/axiosDefaults';
import CommentEditForm from "./CommentEditForm";
import Alerts from '../../components/Alerts';

const Comment = (props) => {
    const { profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        id,
        setPost,
        setComments, } = props;

    const [showEditForm, setShowEditForm] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
      setIsDeleted(true);

      setTimeout(async () => {
        try {
            // makes a delete request to api endpoint
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err){ 
          
        }
      }, 2500);
    };

    // adds a ternary to show the comment edit form component if a user selects the edit option
  
    return isDeleted ? (
      <Alerts variant="info" message="Comment has been deleted" />
    ) : (
      <div>
        {showAlert && (
          <Alerts variant="info" message="Comment has been updated" />
        )}  
          <Media>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} />
            </Link>
            <Media.Body className="align-self-center ml-2">
              <span className={styles.Owner}>{owner}</span>
              <span className={styles.Date}>{updated_at}</span>
              {is_owner && !showEditForm && (
              <MenuDropdown
                handleEdit={() => setShowEditForm(true)}
                handleDelete={handleDelete}
              />
            )}
              {showEditForm ? (
                <CommentEditForm
                id={id}
                profile_id={profile_id}
                content={content}
                profileImage={profile_image}
                setComments={setComments}
                setShowEditForm={setShowEditForm}
                setShowAlert={setShowAlert}
              />
          
              ) : (
                <p>{content}</p>
              )}
            </Media.Body>
           
          </Media>
          </div>
    );
};

export default Comment;