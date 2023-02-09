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
import Alert from './Components/Alert';
// import Notes from './Components/Notes';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
          <Alert message="YOOOO WASSSUUUPPPP"/>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>          
              </Routes>
            </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
