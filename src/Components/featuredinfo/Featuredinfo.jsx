import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Featuredinfo({ name, num }) {
  const Colors = (num) => {
    if (num > 10) {
      return "yellow";
    }
    if (num <= 10) {
      return "Black";
    }
  };
  return (
    <Box>
      <Box sx={{ width: 250 }}>
        <Card sx={{ maxWidth: 250, height: 120, color: "#fafafafa" }}>
          <CardContent>
            <Typography
              mt={2}
              align="center"
              sx={{ color: Colors(num), fontWeight: "bold", fontSize: "30px" }}
            >
              {num}
              {name === "Current Balance" ? " $" : ""}
            </Typography>
            <Typography
              align="center"
              sx={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
            >
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
