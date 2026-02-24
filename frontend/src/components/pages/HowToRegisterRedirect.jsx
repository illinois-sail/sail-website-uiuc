import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HowToRegisterRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/FAQ#how-to-register', { replace: true });
    // Small delay to ensure the FAQ page has rendered
    setTimeout(() => {
      const element = document.querySelector('#how-to-register');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, [navigate]);

  return null;
}

export default HowToRegisterRedirect;

