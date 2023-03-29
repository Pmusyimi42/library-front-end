import './App.css';
import Login from './components/Login';
import Signup from './components/signup';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
