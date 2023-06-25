
import NavBar from './components/NavBar';
import styles from './App.module.css'  
import './index.css'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className={styles.App}>
        <NavBar>
          <Container>
            
          </Container>
        </NavBar>
    </div>
  );
}

export default App;