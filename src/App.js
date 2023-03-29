import './App.css';
import Login from './components/Login';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom"
import Signup from './components/Signup';
import ShowBook from './components/ShowBook';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/book' element={<ShowBook/>}/>
        </Routes>
    </div>
  );
}

export default App;
