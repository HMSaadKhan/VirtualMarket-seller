import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import orderService from "../../Services/OrderService";
import OrderComponent from "./OrderComponent";
import OrderMenu from "./OrderMenu";

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
    orderService
      .GetOrders(status)
      .then((data) => {
        console.log(data);
        setorderDetails(data);
      })
      .catch((data) => {
        console.log(data.response);
      });
  };
  React.useEffect(Orders, [status]);

  const ChangeOrderStatus = (id, status) => {
    console.log(id, status);
    if (status === "DELIVERED" || status === "RETURNED") {
      orderService
        .concludeOrder(id, { status })
        .then((data) => {
          console.log(data);
          Orders();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      orderService
        .changeOrderStatus(id)
        .then((data) => {
          console.log(data);
          Orders();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
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
