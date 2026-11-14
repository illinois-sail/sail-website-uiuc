import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword'; 
import Signup from './pages/Signup';
import Transportation from './pages/Transportation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/About' element = {<About />}/>
        <Route path = '/HowToRegister' element = {<HowToRegister />}/>
        <Route path = '/Classes' element = {<Classes />}/>
        <Route path = '/Faq' element = {<Faq />}/>
        <Route path = '/Login' element = {<Login />}/>
        <Route path = '/Logout' element = {<Logout />}/>
        <Route path = '/Profile' element = {<Profile />}/>
        <Route path = '/Register' element = {<Register />}/>
        <Route path = '/ResetPassword' element = {<ResetPassword />}/>
        <Route path = '/Signup' element = {<Signup />}/>
        <Route path = '/Transportation' element = {<Transportation />}/>

        <Route path = '*' element = {<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
