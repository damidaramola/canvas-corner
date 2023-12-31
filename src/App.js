
import NavBar from './components/NavBar';
import styles from './App.module.css'
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostEditForm from './pages/posts/PostEditForm';
import PostPage from './pages/posts/PostPage';
import DisplayPages from './pages/posts/DisplayPages';
import { useCurrentUser } from './contexts/CurrentUserContext';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';
import PageNotFound from './components/PageNotFound';
import LandingPage from './pages/landing/LandingPage';


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || '';



  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      {!currentUser ? (
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path='/signup' render={() => <SignUpForm />} />
          <Route exact path='/signin' render={() => <h1> <SignInForm /></h1>} />
          <Route render={() => <LandingPage />} />
        </Switch>
      ): (
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <DisplayPages
                message="No results found" />
            )}
          />
          {/* Feed route */}
          <Route
            exact path="/feed"
            render={() => (
              <DisplayPages
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          {/* bookmarks post route */}
          <Route
            exact path="/bookmarks"
            render={() => (
              <DisplayPages
                message="No results found. Adjust the search keyword or bookmark a post."
                filter={`post_bookmarks__owner__profile=${profile_id}&ordering=-post_bookmarks__bookmarked_at&`}
              />
            )}
          />

          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
          <Route exact path="/profiles/:id/edit/username"render={() => <UsernameForm />}/>
          <Route render={() => <PageNotFound />} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      )}

      </Container>
    </div>

  );
}

export default App;