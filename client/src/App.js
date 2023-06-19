import Home from './screens/Home'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Signup from './screens/signup';
import Login from './screens/login';
import Cartprovider from './components/ContexReducer';
import Reduce from './components/Reduce';

function App() {
  return (
   <> 
   <Cartprovider>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/reduce' element={<Reduce/>}>




      </Route>
    </Routes>
   </Router>
   </Cartprovider>
   </>
  );
}

export default App;
