import React from "react";
import "./topbar.css";
import { NotificationsNone, AccountCircle, Settings } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            Virtual<span className="logoinner">Market</span>
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>

          <div className="topbarIconContainer">
            <AccountCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
