import React from "react";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopWidgets from "./TopWidgets";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBox from "../../Components/Message/Chatbox";
import Charts from "../../Components/charts/Charts";
import orderService from "../../Services/OrderService";
export const MarginBox = styled(Box)({
  width: "100%",
});
export default function Home(props) {
  const [anchor, setanchor] = React.useState();
  const [chatbool, setchatbool] = React.useState(false);
  const [bool, setbool] = React.useState(false);
  const [orderdata, setorderdata] = React.useState();

  React.useEffect(() => {
    orderService.orderChart().then((data) => {
      setorderdata(data.data);
    });
  }, []);
  return (
    <IsLoggedin>
      <EmailVerification>
        {bool && (
          <>
            <ChatBox bool={chatbool} setbool={setchatbool} anchor={anchor} />
          </>
        )}

        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 16, right: "1%" }}
          onClick={(e) => {
            setchatbool(true);
            setbool(true);
            setanchor(e.currentTarget);
          }}
        >
          <ChatIcon />
        </Fab>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TopWidgets />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Charts data={orderdata} />
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
