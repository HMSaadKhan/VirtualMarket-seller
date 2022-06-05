import React from "react";
import { Box, Typography } from "@mui/material";
export default function SellerBlocked() {
  return (
    <div>
      {" "}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15%",
              marginLeft: "220px",
            }}
          >
            <Typography
              sx={{ color: "red", fontWeight: "bold", fontSize: "50px" }}
            >
              Blocked
            </Typography>

            <Typography
              sx={{ color: "black", fontWeight: "bold", fontSize: "15px" }}
            >
              contact @ virtualmarket@admin.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
