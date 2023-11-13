import * as React from "react";
import logo from "../assets/sail24logo.png";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import "../fonts.css";
import { useMediaQuery } from "@material-ui/core";

const drawerWidth = 240;
const navItems = ["register", "classes", "about"];
function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        color="#64b6ac"
        variant="h6"
        sx={{ my: 2, fontFamily: "sergiotrendy" }}
      >
        SAIL
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontFamily: "sergiotrendy" }}
            >
              <Link
                color="#64b6ac"
                href={`/${item}`}
                underline="none"
                onClick={handleDrawerToggle}
                sx={{ fontFamily: "sergiotrendy" }}
                style={{ padding: "10px" }}
              >
                <ListItemText primary={item} sty3le={{ fontSize: "100px"}} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const isMobile = useMediaQuery('(max-width:650px)');
  return (
    <Box sx={{ display: "block", boxShadow: "0" }} >
      <AppBar component="nav" sx={{ backgroundColor: "transparent" }} style={{paddingLeft: "98px", paddingTop: "50px", boxShadow: "none"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "sergiotrendy" }}
          >
            <Button 
              href = "/"
              backgroundImg = {logo}
            >
              {/* add in the logo here as an image */}
              <img src={logo} style={{width: "150px"}} alt="top_left_logo"/>
            </Button>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  fontFamily: "JetBrainsMono",
                  fontSize: 20,
                  paddingRight: "2vw", // Adjust the padding value as needed
                  paddingLeft: "2vw"
                }}
                href={`/${item}`}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#FDE5C1",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
