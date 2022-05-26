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
import OrderComponent from "./WarrantyComponent";

const steps = [
  "Received Date",
  "Packaging Date",
  "Shipping Date",
  "completion Date",
];
const useStyles = makeStyles({
  button: {},
});
const orderStatus = [
  "PLACED",
  "PACKAGING",
  "SHIPPING",
  "DELIVERED",
  "RETURNED",
  "CANCELED",
];
export default function WarrantyMenu() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          minWidth: 500,
          maxWidth: 500,
        }}
      >
        <CardContent>Warranties</CardContent>
      </Card>
    </Box>
  );
}
