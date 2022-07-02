/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Box, Card, Typography } from "@mui/material";
import moment from "moment";
const bg = (data) => {
  if (data === "SELLER") return "#c9485b";
  else return "white";
};
export default function TextMsg({ message }) {
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: bg(message.sender),
          minWidth: "100px",
          maxWidth: "300px",
          padding: "5px",
        }}
      >
        <Typography align="left">{message.content}</Typography>

        <Typography align="right" sx={{ fontSize: "10px" }}>
          {moment(message.createdAt).format("LT")}
        </Typography>
      </Card>
    </Box>
  );
}
