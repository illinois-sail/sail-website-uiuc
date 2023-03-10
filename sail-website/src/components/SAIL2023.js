import React from 'react';
import { Paper, Typography } from '@mui/material';
import { ReactComponent as Plane } from "./paper-plane-small.svg";

const styles = {
  paper: {
    width: '25%',
    alignItems: 'center',
    marginBottom: '2.5%',
    marginLeft: '37.5%',
    marginRight: '37.5%',
    backgroundColor: 'transparent',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.25)',
    border: '10px solid #64b6ac',
    borderRadius: '20%',
  },
  typography: {
    fontFamily: 'sergiotrendy',
    fontStyle: '',
    paddingBottom: '0.1em',
    paddingTop: '0.1em',
  },
};

const SAIL2023 = ({ isMobile }) => {
  return (
    <Paper sx={styles.paper}>
      {!isMobile && <Plane style={{ scale: { xs: '0.6', sm: '0.8' } }} />}
      <Typography
  variant="h3"
  sx={{
    ...styles.typography,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    textAlign: 'center',
    padding: '0 5%',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
  }}
  color="#64b6ac"
>
  SAIL 2023
</Typography>
    </Paper>
  );
};

export default SAIL2023;
