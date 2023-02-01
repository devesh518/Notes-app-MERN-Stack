import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import NoteState from './Context/Notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>          
            </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
