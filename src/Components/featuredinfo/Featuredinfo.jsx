import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Featuredinfo({ name, num }) {
  const Colors = (num) => {
    if (num > 10) {
      return "Black";
    }
    if (num <= 10) {
      return "Black";
    }
  };
  return (
    <Box>
      <Card
        sx={{ maxWidth: 250, minWidth: 250, height: 120, color: "#fafafafa" }}
      >
        <CardContent>
          <Typography
            mt={2}
            align="center"
            sx={{ color: Colors(num), fontWeight: "bold", fontSize: "30px" }}
          >
            {name === "Current Balance" ? "PKR " : ""}
            {num}
          
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
  );
}
