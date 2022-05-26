import React, { useEffect, useState, useContext } from "react";
import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import { Box } from "@mui/material";
import orderService from "../../Services/OrderService";
import { styled } from "@mui/material/styles";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { VerifyContext } from "../../Contexts/Verification/Verify";
import sellerService from "../../Services/SellerServices";
import { Container } from "../../Styles/StyledBoxes";
import sellerServices from "../../Services/SellerServices";

export const MarginBox = styled(Box)({
  margin: "20px",
});
export default function Home(props) {
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
      console.log(data.data.balance);
      setBalance(data.data.balance);
      setloading(false);
    });
  }, []);

  return (
    <IsLoggedin>
      <EmailVerification>
        <LoadingScreen bool={loading} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "5%",
            paddingBottom: "5%",
            marginLeft: "200px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <MarginBox>
              <Featuredinfo name={"New Orders"} num={newOrder} />
            </MarginBox>
            <MarginBox>
              <Featuredinfo name={"Pending Orders"} num={pendingOrder} />
            </MarginBox>
            <MarginBox>
              <Featuredinfo name={"Completed Orders"} num={completedOrder} />
            </MarginBox>
            <MarginBox>
              <Featuredinfo name={"Current Balance"} num={Balance} />
            </MarginBox>
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
