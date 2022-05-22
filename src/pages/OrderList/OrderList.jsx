import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material/";
import orderService from "../../Services/OrderService";
import OrderComponent from "./OrderComponent";
import OrderMenu from "./OrderMenu";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

export default function OrderList(props) {
  console.log(props);
  const status = props.match.params.status;

  const [orderDetails, setorderDetails] = useState([]);
  const [loading, setloading] = useState(false);

  const Orders = () => {
    setloading(true);
    orderService
      .GetOrders(status)
      .then((data) => {
        setloading(false);
        setorderDetails(data);
      })
      .catch((data) => {
        setloading(false);
        console.log(data.response);
      });
  };
  useEffect(Orders, [status]);

  const ChangeOrderStatus = (id, status) => {
    setloading(true);

    if (status === "DELIVERED" || status === "RETURNED") {
      orderService
        .concludeOrder(id, { status })
        .then((data) => {
          setloading(false);
          Orders();
        })
        .catch((err) => {
          console.log(err.response);
          setloading(false);
        });
    } else {
      orderService
        .changeOrderStatus(id)
        .then((data) => {
          setloading(false);
          Orders();
        })
        .catch((err) => {
          console.log(err.response);
          setloading(false);
        });
    }
  };

  return (
    <IsLoggedin>
      <EmailVerification>
        <Box
          sx={{
            flex: 4,
          }}
        >
          <LoadingScreen bool={loading} />
          <Box>
            <OrderMenu />
          </Box>
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
              <Typography sx={{ marginTop: "200px" }}>No Orders</Typography>
            )}
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
