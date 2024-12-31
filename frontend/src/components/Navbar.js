import '../fonts.css';
import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import logo from '../assets/sail-logo.png';
import { Link } from "react-router-dom";
import AuthContext, { useAuth } from "./AuthContext";


const navItems = [
  { label: "CLASSES", route: "/classes" },
  { label: "ABOUT US", route: "/aboutus" },
  { label: "LOGIN", route: "/login" },
];

const navItemsWhenLoggedIn = [
  { label: "CLASSES", route: "/classes" },
  { label: "PROFILE", route: "/profile" },
  { label: "ABOUT US", route: "/aboutus" },
  { label: "LOGOUT", route: "/logout" }, 
];


const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: "none",
  backdropFilter: "none",
  boxShadow: "none",
  marginTop: "20px"
}));

const GlassDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "250px",
    color: "white",
    border: "none",
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // check if user exists
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedUser && storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <>
      {/* Glassmorphic AppBar */}
      <GlassAppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <IconButton component={Link} to="/home">
            <img src={logo} alt="Logo" style={{ width: 50, height: 'auto' }} /> 
          </IconButton>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            {(isLoggedIn ? navItemsWhenLoggedIn : navItems).map((item, index) => (
              <Typography
                key={index}
                component={Link}
                to={item.route} 
                sx={{
                    fontFamily: "Anta, sans-serif",
                    fontSize: '20px',
                    cursor: "pointer",
                    color: "white",
                    "&:hover": { textDecoration: 'underline' },
                    textDecoration: 'none', 
                }}
                >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </GlassAppBar>

      {/* Glassmorphic Drawer for Mobile */}
      <GlassDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
        {(isLoggedIn ? navItemsWhenLoggedIn : navItems).map((item, index) => (
            <ListItem button key={index} component={Link} to={item.route}>
              <ListItemText
                primary={
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: "Anta, sans-serif",
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
              />
            </ListItem>
          ))}
        </List>
      </GlassDrawer>
    </>
  );
};

export default Navbar;
