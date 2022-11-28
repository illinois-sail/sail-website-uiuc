import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


// const styles = ({
//     paperContainer: {
//         backgroundImage: `url(${"https://github.com/illinois-sail/sail-website-uiuc/blob/ac-homepage/sail-website/src/landing.jpg?raw=true"})`,
//         backgroundSize: 'cover',
//         width: '100%',
//         minHeight: '100vh',

//     }
// });

class HomePage extends React.Component{
    render(){
        return(
            // <Paper style={styles.paperContainer}>
            // </Paper>
            <Box
                sx={{
                    backgroundImage: `url(${"https://raw.githubusercontent.com/illinois-sail/sail-website-uiuc/6155cc6c7ea92ca90868da09d6b95e5df4702f5d/sail-website/src/landing_page.svg"})`,
                    backgroundSize: 'cover',
                    // resizeMode: "stretch",
                    width: '100%',
                    // minHeight: '100vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    // backgroundAttachment: 'fixed',
                    // flexGrow: 1,
                    // overflow: 'hidden',
                height: '1000px',
                // width: '7680px',
                animation: 'slide 3s linear infinite',
            }}
            />
        
        );
    }
}

export default HomePage;