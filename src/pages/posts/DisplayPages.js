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
  const[hasLoaded,setHasLoaded] = useState(false);
  const {pathname} = useLocation();
  const [query, setQuery] = useState("");

  //makes request to api based on filters

  useEffect(()=>{
    const fetchPosts = async ()=>{
      try{
        const {data} = await axiosReq.get(`/posts/?${filter}search=${query}`)
        setPosts(data)
        setHasLoaded(true)
      }catch(err){
        console.log(err)
      }
    }
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  
  },[filter,query,pathname])

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        <p>Popular profiles mobile</p>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={appStyles.Description}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Description}>
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