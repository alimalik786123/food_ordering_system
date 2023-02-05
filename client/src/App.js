import Home from './screens/Home'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Signup from './screens/signup';
import Login from './screens/login';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/login' element={<Login/>}>



      </Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
