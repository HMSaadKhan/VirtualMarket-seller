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
          <Typography
            align="right"
            sx={{
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Seller
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
