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
      <Card sx={{ backgroundColor: "#fafafa" }}>
        <CardContent>
          <>
            <Typography
              align="left"
              variant="caption"
              sx={{ color: "red", fontWeight: "bold" }}
            >
              {name}
            </Typography>
            <Typography
              mt={2}
              align="center"
              sx={{ color: Colors(num), fontWeight: "bold", fontSize: "30px" }}
            >
              {name === "Current Balance" ? "PKR " : ""}
              {num}
            </Typography>
          </>
        </CardContent>
      </Card>
    </Box>
  );
}
