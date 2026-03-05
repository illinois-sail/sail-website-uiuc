import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function FAQ() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>FAQ</h1>
      
      <section id="how-to-register" style={{ marginTop: '40px', paddingTop: '20px' }}>
        <h2>How to Register</h2>
        <p>Registration instructions will be added here.</p>
      </section>

      <section id="transportation" style={{ marginTop: '40px', paddingTop: '20px' }}>
        <h2>Transportation</h2>
        <p>Transportation information will be added here.</p>
      </section>
    </div>
  );
}

export default FAQ;
