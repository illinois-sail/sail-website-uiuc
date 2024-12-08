import React from 'react';
import './App.css';
import background from './assets/final-background.png';
import { AuthProvider } from './components/AuthContext';
//import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter'; 
//import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <div
          id='background-container'
          className='background-container'
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
        
        <div style={{ zIndex: 1 }}>
          {/* <NavBar /> */}
          <AppRouter />
        </div>
        <div style={{position: 'absolute', bottom: 40, width: '100%'}}>
          {/* <Footer style={{  }} /> */}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
