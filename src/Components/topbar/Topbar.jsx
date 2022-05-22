import React from "react";
import { useHistory } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Topbar = (props) => {
  const history = useHistory();

  return (
    <AppBar sx={{ background: "white", zIndex: 4 }} position="fixed">
      <Toolbar>
        <div>
          <Typography
            sx={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
            variant="h6"
            onClick={(e) => {
              history.push("/");
            }}
          >
            VirtualMarket
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
