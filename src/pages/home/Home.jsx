import React from "react";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopWidgets from "./TopWidgets";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBox from "../../Components/Message/Chatbox";
export const MarginBox = styled(Box)({
  width: "100%",
});
export default function Home(props) {
  const [chatbool, setchatbool] = React.useState(false);
  const [anchor, setanchor] = React.useState();
  return (
    <IsLoggedin>
      <EmailVerification>
        <ChatBox bool={chatbool} setbool={setchatbool} anchor={anchor} />
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 16, right: "1%" }}
          onClick={(e) => {
            setchatbool(true);
            setanchor(e.currentTarget);
          }}
        >
          <ChatIcon />
        </Fab>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TopWidgets />
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
