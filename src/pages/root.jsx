import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "Components/Appbar";
import Sidebar from "Components/Sidebar";

const drawerWidth = 240;

function root() {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />

      <Outlet />
    </div>
  );
}

export default root;