import React from "react";
import { Card, Typography, Box } from "@mui/material";

export default function PageHeader({ heading }) {
  return (
    <div>
      <Card sx={{ backgroundColor: "#fafafa" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{ fontSize: "25px", fontWeight: "bold", color: "red" }}
          >
            {heading}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}
