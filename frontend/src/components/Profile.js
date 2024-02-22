import React from 'react';
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./Profile.css";
import "../fonts.css";

function Profile() {
    const user = {
        name: 'First Last',
        avatar: 'path/to/avatar.jpg',
        classes: [ // we need to pull this from the state
            'Introduction to Computer Science',
            'Life of a CS student',
        ],
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" display="flex">
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            sx={{ width: 100, height: 100 }}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Typography variant="h4" gutterBottom>
                            {user.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                            Registered Classes:
                        </Typography>
                        <List>
                            {user.classes.map((className, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={className} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Profile;
