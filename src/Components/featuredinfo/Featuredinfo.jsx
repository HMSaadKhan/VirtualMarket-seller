import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./featuredinfo.css";

export default function Featuredinfo({ name, num }) {
  return (
    <Box>
      <Box sx={{ width: 250 }}>
        <Card sx={{ maxWidth: 250, height: 150 }}>
          <CardContent>
            <Typography>{name}</Typography>
            <Typography>{num}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
