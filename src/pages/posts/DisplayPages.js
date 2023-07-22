import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import styles from "../../styles/DisplayPages.module.css";
import Asset from "../../components/Asset";
import Post from "./Post";
import NoResults from '../../assets/no-results.png'
import { useLocation } from "react-router";

function DisplayPages({message, filter =''}) 
{
  const [posts,setPosts] = useState({results:[]});
  const[hasLoaded,setHasLoaded] = useState(false)
  const {pathname} = useLocation();

  //makes request to api based on filters

  useEffect(()=>{
    const fetchPosts = async ()=>{
      try{
        const {data} = await axiosReq.get(`/posts/?${filter}`)
        setPosts(data)
        setHasLoaded(true)
      }catch(err){
        console.log(err)
      }
    }
    setHasLoaded(false)
    fetchPosts();
  },[filter,pathname])

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={2} className="d-none d-lg-block p-0 p-lg-2">
     
      </Col>
    </Row>
  );
}

export default DisplayPages;