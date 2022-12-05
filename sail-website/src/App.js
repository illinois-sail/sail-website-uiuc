import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Home from './components/Home';
import Typography from '@mui/material/Typography';
import Question from './components/Questions';

import Box from "@mui/material/Box";
import beachHut from './surf_hut.png'


function App() {
  return (
    <div>
       <AppRouter />
       <NavBar />
       {/* <HomePage /> */}
       {/* <div className="homepage">
       <div>
        <br></br>
       </div>
      <Typography variant='h2' algin='center'>Welcome to SAIL</Typography>
      <h1> April 8th 2023 </h1>
      <div className='info'>

          <p >
            Welcome to Illinois Computer Science Sail!
            We are an entirely student-run organization that hosts an annual event where
            high schoolers have the chance to experience what it is like to be a computer science student
            at the University of Illinois at Urbana-Champaign.
          </p>
          </div>
        <a href="">
          <button className = "button"> Interest From </button>
        </a>
        <a href="">
          <button className = "button"> Teacher Registration </button>
        </a>
        <a href="">
          <button className = "button"> Student Registration </button>
        </a>
        
      <Typography variant='h3' algin='center'>Contact SAIL</Typography>
      <p>Google Form Link?</p>
      </div>
      <div className="section-about">
      <Typography variant='h3' alginItem='center'>About SAIL</Typography>
      <Box
                sx={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                  mx: 5,
                  alignItems: 'center',
                }}
            >
                <Question />
                <img src={beachHut} alt='beach hut' />
            </Box>
      
      </div> */}
      
    </div> 
       
    
  );
}

export default App;