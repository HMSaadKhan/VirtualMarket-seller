/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Typography } from "@mui/material";
import React from "react";
import waitImage from "./Waiting.png";
export default function AprovalWait() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "150px" }}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                //   cursor: "poinnter",
                //   width: "400px",
                height: "300px",
              }}
            >
              <img
                width="100%"
                height="100%"
                objectFit="contain"
                src={waitImage}
                alt="main Image"
              />
            </Box>{" "}
          </Box>
          <Typography
            color="primary"
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Your Information has been sent to Admin for approval
          </Typography>

          <Typography
            sx={{ color: "black", fontWeight: "bold", fontSize: "15px" }}
          >
            Thank You for your patience!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
