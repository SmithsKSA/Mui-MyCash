import React from "react";
import { Avatar, Link, Typography, Toolbar, AppBar } from "@mui/material";

function Appbar({ drawerWidth }) {
  return (
    <AppBar
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      position="static"
    >
      <Toolbar>
        <Link
          href="/"
          sx={{ flexGrow: 1, textDecoration: "none" }}
          color="inherit"
        >
          My Cash
        </Link>
        <Typography color="inherit" marginRight={2}>
          Your Name
        </Typography>
        <Avatar alt="Error" src="./static/images/userImg.jpg" />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
