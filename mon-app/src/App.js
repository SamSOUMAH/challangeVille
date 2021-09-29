import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
    <div className="App">
      <h1>Bonjour</h1>
      <Button variant="danger"></Button>
      <h3><FontAwesomeIcon icon={faSpinner} color="blue" spin/></h3>
  
    </div>
  );
}

export default App;
