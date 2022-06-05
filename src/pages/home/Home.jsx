import React from "react";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopWidgets from "./TopWidgets";

export const MarginBox = styled(Box)({
  width: "100%",
});
export default function Home(props) {
  return (
    <IsLoggedin>
      <EmailVerification>
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
