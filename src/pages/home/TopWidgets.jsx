import React, { useEffect, useState } from "react";
import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import { Box } from "@mui/material";
import orderService from "../../Services/OrderService";
import { styled } from "@mui/material/styles";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import sellerService from "../../Services/SellerServices";

export const MarginBox = styled(Box)({
  width: "100%",
});
export default function TopWidgets(props) {
  const [completedOrder, setcompletedOrder] = useState(0);
  const [pendingOrder, setpendingOrder] = useState(0);
  const [newOrder, setnewOrder] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    orderService.OrdersCount().then((data) => {
      setpendingOrder(data.data.pendingOrders);
      setcompletedOrder(data.data.completedOrders);
      setnewOrder(data.data.newOrders);
      setloading(false);
    });
  }, []);
  useEffect(() => {
    setloading(true);
    sellerService.GetBalance().then((data) => {
      setBalance(data.data.balance);
      setloading(false);
    });
  }, []);

  return (
    <Box mt={7} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
      <LoadingScreen bool={loading} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box m={2} sx={{ width: "100%" }}>
          <Featuredinfo name={"New Orders"} num={newOrder} />
        </Box>

        <Box m={2} sx={{ width: "100%" }}>
          <Featuredinfo name={"Pending Orders"} num={pendingOrder} />
        </Box>
        <Box m={2} sx={{ width: "100%" }}>
          <Featuredinfo name={"Completed Orders"} num={completedOrder} />
        </Box>
        <Box m={2} sx={{ width: "100%" }}>
          <Featuredinfo name={"Current Balance"} num={Balance} />
        </Box>
      </Box>
    </Box>
  );
}
