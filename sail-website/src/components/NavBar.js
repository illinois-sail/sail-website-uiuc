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
import CyberButton from "./CyberButton";
import sail_logo_transparent from "../assets/sail_logo_transparent.png";

const drawerWidth = 240;
const navItems = ["register", "classes", "hackathon", "about"];
function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "block", boxShadow: "0" }} >
      <AppBar component="nav" sx={{ backgroundColor: "transparent" }} style={{paddingLeft: "20px", paddingTop: "50px", boxShadow: "none"}}>
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
              <img src={sail_logo_transparent} style={{width: "120px"}} alt="top_left_logo"/>
            </Button>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <CyberButton key={index} text={item} tag={index} href={`/${item}`} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
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
