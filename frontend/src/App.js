import React, { useEffect, useState } from 'react';
import './App.css';
import { AuthProvider } from './components/AuthContext';
import AppRouter from './components/AppRouter'; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [background, setBackground] = useState(
    'linear-gradient(180deg, rgba(84, 79, 149, 1) 35%, rgba(42, 39, 86, 1) 70%, rgba(14, 13, 41, 1) 100%)'
  );

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / docHeight;

    const startColor = `rgba(84, 79, 149, ${1 - scrollFraction})`;
    const midColor = `rgba(42, 39, 86, ${1 - scrollFraction / 2})`;
    const endColor = `rgba(14, 13, 41, 1)`;

    setBackground(`linear-gradient(180deg, ${startColor} 35%, ${midColor} 70%, ${endColor} 100%)`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AuthProvider>
    <BrowserRouter>
      <div style={{ 
        position: 'relative',
        height: '100%',
      }}>
        {/* Background wrapper */}
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background,
            zIndex: 0,
            pointerEvents: 'none'  // This allows clicks to pass through to content
          }} 
        />
        
        {/* Content wrapper */}
        <div 
        style={{ 
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'transparent'
        }}>
          
          <Navbar />
          <AppRouter />
          
          <div style={{position: 'relative', bottom: 0, width: '100%'}}>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;