import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import orderService from "../../Services/OrderService";
import OrderComponent from "./OrderComponent";

const steps = [
  "Received Date",
  "Packaging Date",
  "Shipping Date",
  "completion Date",
];
const useStyles = makeStyles((theme) => ({
  button: {},
}));

export default function OrderMenu() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
    >
      <Card sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardContent>
          <Button
            sx={{
              color: "#FF0000",
              backgroundColor: "#fff",
              marginLeft: "10px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#FF0002",
                color: "#ffff",
              },
            }}
            onClick={(e) => {
              history.push("/orders/PLACED");
            }}
          >
            Received
          </Button>
          <Button
            sx={{
              color: "#FF0000",
              backgroundColor: "#fff",
              marginLeft: "10px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#FF0002",
                color: "#ffff",
              },
            }}
            onClick={(e) => {
              history.push("/orders/PACKAGING");
            }}
          >
            Packaging
          </Button>
          <Button
            sx={{
              color: "#FF0000",
              backgroundColor: "#fff",
              marginLeft: "10px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#FF0002",
                color: "#ffff",
              },
            }}
            onClick={(e) => {
              history.push("/orders/SHIPPING");
            }}
          >
            Shipped
          </Button>
          <Button
            sx={{
              color: "#FF0000",
              backgroundColor: "#fff",
              marginLeft: "10px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#FF0002",
                color: "#ffff",
              },
            }}
            onClick={(e) => {
              history.push("/orders/DELIVERED");
            }}
          >
            Completed
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
