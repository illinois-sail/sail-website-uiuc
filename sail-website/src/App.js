import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Typography from '@mui/material/Typography';
import Question from './components/Questions';

import Box from "@mui/material/Box";
import beachHut from './surf_hut.png'


function App() {
  return (
    <div>
       <AppRouter />
       <NavBar />
    </div>
       
    
  );
}

export default App;