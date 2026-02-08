import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TransportationRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/FAQ#transportation', { replace: true });
    // Small delay to ensure the FAQ page has rendered
    setTimeout(() => {
      const element = document.querySelector('#transportation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, [navigate]);

  return null;
}

export default TransportationRedirect;

