/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Box, Card, Typography } from "@mui/material";
import moment from "moment";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  imagemsg: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
  },
});

const bg = (data) => {
  if (data === "SELLER") return "#c9485b";
  else return "white";
};
export default function ImageMsg({ message }) {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <Card
          sx={{
            backgroundColor: bg(message.sender),
            // margin: "10px",
            minWidth: "100px",
            maxWidth: "300px",
            padding: "5px",
          }}
        >
          <Box>
            <img
              className={classes.imagemsg}
              src={message.content}
              alt="image"
            />
          </Box>

          <Typography align="right" sx={{ fontSize: "10px" }}>
            {moment(message.createdAt).format("LT")}
          </Typography>
        </Card>
      </Box>
    </div>
  );
}
