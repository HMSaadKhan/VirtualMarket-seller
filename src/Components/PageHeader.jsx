import React from "react";
import { Card, Typography, Box } from "@mui/material";

export default function PageHeader({ heading }) {
  return (
    <div>
      <Card sx={{ backgroundColor: "#fafafa" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#c9485b",
          }}
        >
          <Typography
            sx={{ fontSize: "25px", fontWeight: "bold", color: "white" }}
          >
            {heading}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}
