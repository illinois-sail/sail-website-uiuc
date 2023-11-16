import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import './HomePageTitle.css'; 

const HomePageTitle = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay (adjust as needed)
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, []);

  return (
    <Typography
      className={`title_text ${animate ? 'splash-animation zoom-out-animation' : ''}`}
      variant="h1"
      style={{
        fontFamily: 'Hyperwave',
        marginTop: '0',
        paddingTop: '0',
        fontSize: animate ? '20vw' : '30vw', // Adjust initial and final font size
        color: 'yellow',
        textShadow: '0 0 2vw cyan', // Adjust shadow intensity
        // background: '-webkit-linear-gradient(45deg, yellow, cyan)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        width: '100%'
      }}
      align="center"
    >
      SAIL 2024
    </Typography>
  );
};

export default HomePageTitle;
