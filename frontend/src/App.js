import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Footer from './Components/Footers';
import Signin from './Components/Signin';
import Register from './Components/Register';
import Aboutus from './Components/Aboutus';
function App() {
  return (
  <>
 
   <Router>
   <Navbar />
    <Routes>
    <Route path="/" element={< Footer/>} />
      <Route path="/signin" element={<Register/>} />
      {/* <Route path='/edit' element={<EditExercise/>} /> */}
      </Routes>

      </Router>
  </>
  );
}

export default App;
