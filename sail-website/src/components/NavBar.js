import * as React from "react";
import logo from "../assets/sail_logo_transparent.png";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../fonts.css";
import CyberButton from "./CyberButton";

const navItems = ["register", "classes", "hackathon", "about"];

function NavBar(props) {
  return (
    <Box sx={{ display: "block", boxShadow: "0" }} >
      {/* <AppBar component="nav" sx={{ backgroundColor: "transparent" }} style={{paddingLeft: "20px", paddingTop: "50px", boxShadow: "none"}}> */}
        <Toolbar sx = {{ marginTop: "50px" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "sergiotrendy" }}
          >
            <a href="/">
              <img src={logo} style={{ width: "80px", height: "80px"}} alt="top_left_logo"/>
            </a>

          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <CyberButton key={index} text={item} tag={index} href={`/${item}`} />
            ))}
          </Box>
        </Toolbar>
      {/* </AppBar> */}
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
