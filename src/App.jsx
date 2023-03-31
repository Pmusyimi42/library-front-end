import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Home';
import ShowBook from './components/ShowBook';



function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/book' element={<ShowBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
