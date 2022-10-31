import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { Typography } from '@mui/material';

function App() {
  return (
    <div>
       <AppRouter />
       <NavBar />
       <div>
        Hello
       </div>
      <Typography variant='h2' algin='center'>Welcome to SAIL</Typography>
      {/* <Typography variant='h3' algin='center'>About SAIL</Typography>
      <Typography variant='h3' algin='center'>Contact SAIL</Typography> */}
      <h1> April 2023 </h1>
          <p>
            Welcome to Illinois Computer Science Sail!
            We are an entirely student-run organization that hosts an annual event where
            high schoolers have the chance to experience what it is like to be a computer science student
            at the University of Illinois at Urbana-Champaign.
          </p>
        <a href="">
          <button class = "button"> Interest From </button>
        </a>
        <a href="">
          <button class = "button"> Teacher Registration </button>
        </a>
        <a href="">
          <button class = "button"> Student Registration </button>
        </a>
    </div>
    
  );
}

export default App;