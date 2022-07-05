import React from "react";
import { useHistory } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Topbar = (props) => {
  const history = useHistory();

  return (
    <AppBar sx={{ background: "white", zIndex: 4 }} position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            variant="h6"
            color="primary"
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
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            align="right"
            sx={{
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            contact us:&nbsp;
          </Typography>
          <Typography
            align="right"
            color="primary"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            virtualmarket06@gmail.com
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
