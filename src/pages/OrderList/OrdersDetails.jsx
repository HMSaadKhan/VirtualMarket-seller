import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material/";
import orderService from "../../Services/OrderService";
import OrderComponent from "./OrderComponent";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

export default function OrderDetails(props) {
  const id = props.match.params.id;
  console.log(id);

  const [orderDetails, setorderDetails] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const GetOrders = () => {
    setloading(true);
    orderService
      .GetOrderDetails(id)
      .then((data) => {
        setloading(false);
        console.log(data);
        setorderDetails(data);
        seterror("");
      })
      .catch((data) => {
        setloading(false);
        seterror(data.response.data);
      });
  };
  useEffect(GetOrders, [id]);

  const ChangeOrderStatus = (id, status) => {
    setloading(true);

    if (status === "DELIVERED" || status === "RETURNED") {
      orderService
        .concludeOrder(id, { status })
        .then((data) => {
          setloading(false);
          GetOrders();
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
          GetOrders();
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
            {!error.length > 0 ? (
              <>
                {orderDetails ? (
                  <>
                    <OrderComponent
                      order={orderDetails}
                      ChangeOrderStatus={ChangeOrderStatus}
                    />
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
              </>
            ) : (
              <></>
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
