import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import orderService from "../../Services/OrderService";
import OrderComponent from "./OrderComponent";
import OrderMenu from "./OrderMenu";
import { Co2Sharp } from "@mui/icons-material";

const steps = [
  "Received Date",
  "Packaging Date",
  "Shipping Date",
  "completion Date",
];
const useStyles = makeStyles((theme) => ({
  button: {},
}));

export default function OrderList(props) {
  console.log(props);
  const status = props.match.params.status;
  const classes = useStyles();

  const [orderDetails, setorderDetails] = useState([]);
  const [orderItems, setorderItems] = useState();

  const Orders = () => {
    console.log(status);

    orderService
      .GetOrders(status)
      .then((data) => {
        console.log(data);
        setorderDetails(data);
      })
      .catch((data) => {
        console.log(data);
      });
  };
  React.useEffect(Orders, [status]);

  const ChangeOrderStatus = (data) => {
    orderService
      .changeOrderStatus(data)
      .then((data) => {
        console.log(data);
        Orders();
      })
      .catch((data) => {
        console.log(data);
      });
  };

  return (
    <Box sx={{ width: "50%", marginLeft: "15%" }}>
      <OrderMenu />
      <Box>
        {orderDetails.length > 0 ? (
          <>
            {orderDetails.map((order) => (
              <OrderComponent
                order={order}
                key={order._id}
                ChangeOrderStatus={ChangeOrderStatus}
              />
            ))}
          </>
        ) : (
          <>
            <Typography
              ml={30}
              mt={25}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              No {status} Orders Yet
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
