import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/home';
import Manage from './pages/manage';
import About from './pages/about';
import Contact from './pages/contact';
import Signin from './Components/Signin';
import Register from './Components/Register';
function App() {
return (
<>
<Router>
<Routes>
<Route path="/" element={<Layout>
<Home />
</Layout>} />


<Route path="/about" element={<Layout>
<About />
</Layout>} />


<Route path="/contact" element={<Layout>
<Contact />
</Layout>} />


<Route path="/manage" element={
<Layout>
<Manage />
</Layout>} />


<Route path="/signin" element={
<Layout><Signin/></Layout>
}/>

<Route path="/register" element={
<Layout><Register/></Layout>
}/>
{/* <Route path='/edit' element={<EditExercise/>} /> */}
</Routes>
</Router>
</>
);
}


export default App;
