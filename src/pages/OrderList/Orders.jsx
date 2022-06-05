import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material/";
import orderService from "../../Services/OrderService";
import OrderMenu from "./OrderMenu";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

import OrderList from "./OrderList";

export default function Orders(props) {
  const status = props.match.params.status;
  console.log(status);

  const [orderDetails, setorderDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const Orders = () => {
    setloading(true);
    orderService
      .GetOrders(status)
      .then((data) => {
        setloading(false);
        console.log(data);
        setorderDetails(data);
        seterror("");
      })
      .catch((data) => {
        setloading(false);
        console.log(data.response.data);
        seterror(data.response.data);
      });
  };
  useEffect(Orders, [status]);

  return (
    <IsLoggedin>
      <EmailVerification>
        <LoadingScreen bool={loading} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            aligItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <OrderMenu />
          </Box>

          <Box sx={{ width: "100%" }}>
            {!error.length > 0 ? (
              <>
                {orderDetails.length > 0 ? (
                  <OrderList orderDetails={orderDetails} />
                ) : (
                  <></>
                )}
              </>
            ) : (
              <Box m={2}>
                <Typography
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  {error}
                </Typography>
              </Box>
            )}
          </Box>

          {/* <Box>
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
                <Typography sx={{ marginTop: "200px", marginLeft: "250px" }}>
                  No Orders
                </Typography>
              )}
            </Box> */}
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
