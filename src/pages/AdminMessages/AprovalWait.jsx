import { Box, Typography } from "@mui/material";
import React from "react";

export default function AprovalWait() {
  return (
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
            sx={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
          >
            Your Information has been sent to Admin for approval
          </Typography>

          <Typography
            sx={{ color: "black", fontWeight: "bold", fontSize: "15px" }}
          >
            Thank You for your patience!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
