import React from "react";

import { Box, Card, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ data }) {
  return (
    <Box ml={2} mr={2} sx={{ marginLeft: "220px" }}>
      <Card
        sx={{ margin: "20px", padding: "20px", backgroundColor: "#fafafa" }}
      >
        <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
          Order Analytics
        </Typography>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#000000" />
            <Line type="monotone" dataKey="Orders" stroke="#FF0000" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
}
