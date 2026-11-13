import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router'; 
import Home from './pages/Home';
import About from './pages/About';
  
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/About' element = {<About />}/>
        <Route path = '/Classes' element = {<Classes />}/>
        <Route path = '/Faq' element = {<Faq />}/>
        <Route path = '/Login' element = {<Login />}/>
        <Route path = '/Logout' element = {<Logout />}/>
        <Route path = '/Profile' element = {<Profile />}/>
        <Route path = '/Register' element = {<Register />}/>
        <Route path = '/ResetPassword' element = {<ResetPassword />}/>
        <Route path = '/Signup' element = {<Signup />}/>
        <Route path = '/Transportation' element = {<Transportation />}/>
      </Routes>
    </div>
  );
}

export default App;
