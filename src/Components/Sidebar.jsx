import React from "react";
import { Drawer, Divider, Toolbar } from "@mui/material";

function Sidebar({ drawerWidth }) {
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
    </Drawer>
  );
}

export default Sidebar;
