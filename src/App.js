
import NavBar from './components/NavBar';
import styles from './App.module.css'
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// when createcontext function is called a new context object is created
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const handleMount = async () => {
    try {
      const { data } = await axios.get('/dj-rest-auth/user/')
      setCurrentUser(data)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    handleMount();
  }, []);


  return (
 
    <CurrentUserContext.Provider value={(currentUser)}>
    <SetCurrentUserContext.Provider value={(currentUser)}> 
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home page</h1>}></Route>
          <Route exact path='/signin' render={() => <h1> <SignInForm /></h1>}></Route>
          <Route exact path='/signup' render={() => <SignUpForm />}></Route>
          <Route render={() => <h1>Page not found!</h1>} />

        </Switch>


      </Container>

    </div>
    </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
   
  );
}

export default App;