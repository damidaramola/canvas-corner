
import NavBar from './components/NavBar';
import styles from './App.module.css'
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import DisplayPages from './pages/posts/DisplayPages';


function App() {


  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <DisplayPages
                                               message='No results found'/>}/>
          <Route exact path='/signin' render={() => <h1> <SignInForm /></h1>}/>
          <Route exact path='/signup' render={() => <SignUpForm />}/>
          <Route exact path='/posts/create' render={()=><PostCreateForm/>}/>
          <Route exact path='/posts/:id' render={()=><PostPage/>}/>
          <Route render={() => <h1>Page not found!</h1>} />
          <></>
        </Switch>
      </Container>
    </div>

  );
}

export default App;