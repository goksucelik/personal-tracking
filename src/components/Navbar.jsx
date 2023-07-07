import { AppBar, Toolbar, Box } from "@mui/material";
import React from "react";
import diamond from "../assets/diamond.png";
function Navbar() {
  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <Box p={2}>
          <img src={diamond} alt="logo" className="logo" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
