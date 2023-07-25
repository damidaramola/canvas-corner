import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Image } from "react-bootstrap";

function ProfilePage() {
 
  const [hasLoaded, setHasLoaded] = useState(false);
  //gets current user object 
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const {pageProfile} = useProfileData();
  const [profile] = pageProfile.results;

//   Makes an API request to fetch user profile and their posts
//   Updates the profile page data
  useEffect(() => {
    const fetchData = async () => {
        try {
            // api request to the profiles endpoint
            const [{ data: pageProfile }] = await Promise.all([
                axiosReq.get(`/profiles/${id}`)
            ]);
            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {results :[pageProfile]}
                
            }))
            setHasLoaded(true);
        } catch (err) {
            console.log(err);
        }
    };
  fetchData()
  }, [id, setProfileData])

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
          className={styles.ProfileImage}
          roundedCircle src={profile.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">Profile username</h3>
          <p>Profile stats</p>
        </Col>
        <Col lg={3} className="text-lg-right">
        <p>Follow button</p>
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
     
        <Container className={appStyles.Description}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    
    </Row>
  );
}

export default ProfilePage;